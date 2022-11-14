const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');

const urlArmor = 'https://calamitymod.fandom.com/wiki/Armor';

const getArmors = async () => {
  const { data } = await axios.get(urlArmor);
  const $ = cheerio.load(data);
  const armorTables = $('table.terraria.lined.sortable');
  const armors = [];
  let id = 20000;

  const transformDefenses = defenses => {
    const newDefenses = defenses.map(defense => {
      if (defense[0] === '0') {
        return defense.slice(1);
      }
      return defense;
    });
    const transformedDefenses = newDefenses.filter(el => el);
    return transformedDefenses;
  };

  armorTables.each((index, el) => {
    $(el)
      .children('tbody')
      .children('tr')
      .each((i, el) => {
        const armorData = {
          id,
          armorName: '',
          armorImg: [],
          armorDefenses: [],
          armorDesc: [],
          craftingItems: [],
        };
        if (index > 2) return;
        const armorName = $(el).children('td').children('a').text();
        const armorImg = $(el).children('td').children('a.image').attr('href');
        const headDef = transformDefenses(
          $(el).children('td:nth-child(3)').text().split('\n')
        );
        const chestDef = transformDefenses(
          $(el).children('td:nth-child(4)').text().split('\n')
        );
        const legsDef = transformDefenses(
          $(el).children('td:nth-child(5)').text().split('\n')
        );
        const totalDef = transformDefenses(
          $(el).children('td:nth-child(6)').text().split('\n')
        );
        const armorDefenses = {
          headDef,
          chestDef,
          legsDef,
          totalDef,
        };
        const armorDesc = [];
        const craftingItems = [];

        $(el)
          .children('td:nth-child(7)')
          .children('ul')
          .children('li')
          .each((i, el) => {
            armorDesc.push($(el).text());
          });

        $(el)
          .children('td:nth-child(8)')
          .children('ul')
          .children('li')
          .each((i, el) => {
            const itemImg = $(el)
              .children('span')
              .children('a')
              .children('img')
              .attr('data-src');
            craftingItems.push([$(el).text(), itemImg]);
          });

        if (armorName) {
          armorData.id = armorData.id + armors.length;
          armorData.armorName = armorName;
          armorData.armorImg = armorImg;
          armorData.craftingItems = craftingItems;
          armorData.armorDefenses = armorDefenses;
          armorData.armorDesc = armorDesc;
          armors.push(armorData);
        }
      });
  });
  console.log(armors);

  fs.writeFileSync(`./armors/armors.json`, JSON.stringify(armors, null, 2));
};

getArmors();
