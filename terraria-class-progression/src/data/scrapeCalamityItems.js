const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function getItemsNames(url) {
  const itemNames = [];
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);
  const table = $('.terraria.sortable.lined span.i.block.alignleft');
  table.each((i, el) => {
    let name = $(el).text();
    if (name.includes(' ')) name = name.replaceAll(' ', '_');
    if (name.includes(`'`)) name = name.replaceAll(`'`, '%27');

    itemNames.push(name);
  });
  return itemNames;
}

async function scrapeData(url, id) {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const weaponDetails = [];
  const craftingIngredients = [];
  const craftingStations = [];
  const recipe = $('table.background-1 tbody tr');
  let isCrafting = true;
  let isIngredient = false;
  const itemData = {
    id,
    itemName: '',
    itemIcon: '',
    craftingStations: [],
    craftingIngredients: [],
  };

  itemData.itemName = $('.infobox.item.float-right').children('.title').text();
  itemData.itemIcon = $(
    '.infobox.item.float-right div.section.images ul li a'
  ).attr('href');
  const weaponData = $(
    '.infobox.item.float-right div.section.statistics table.stat tbody tr'
  );

  weaponData.each((i, el) => {
    const label = $(el).children('th').text();
    const info = $(el).children('td').text();
    if (
      label.toLowerCase().includes('inflict') ||
      label.toLowerCase().includes('grants')
    ) {
      const inflict = $(el).children('td').children('span');
      const img = inflict.children('a').children('img').attr('data-src');

      const debuffName = inflict.children('span').children('span').text();
      const buffName = $(el).children('td').text();

      const debuffChance = inflict.children('span').children('div').text();

      const buffImg = $(el)
        .children('td')
        .children('b')
        .children('span.i')
        .children('img')
        .attr('data-src');

      const buffImg2 = $(el)
        .children('td')
        .children('b')
        .children('span.i')
        .children('img')
        .attr('src');

      const buffImg3 = $(el)
        .children('td')
        .children('span.i')
        .children('img')
        .attr('data-src');

      const buffImg4 = $(el)
        .children('td')
        .children('span.i')
        .children('img')
        .attr('src');

      const buffImg5 = $(el)
        .children('td')
        .children('b')
        .children('span.i')
        .children('a')
        .children('img')
        .attr('data-src');

      const buffImg6 = $(el)
        .children('td')
        .children('b')
        .children('span.i')
        .children('a')
        .children('img')
        .attr('src');

      const debuffImg1 = $(el)
        .children('td')
        .children('span.i')
        .children('img')
        .attr('data-src');

      const debuffImg2 = $(el)
        .children('td')
        .children('span.i')
        .children('img')
        .attr('src');

      const debuffImg3 = $(el)
        .children('td')
        .children('span.i')
        .children('a')
        .children('img')
        .attr('data-src');

      const debuffImg4 = $(el)
        .children('td')
        .children('span.i')
        .children('a')
        .children('img')
        .attr('src');

      if (buffImg && label.toLowerCase().includes('grant')) {
        weaponDetails.push([label, buffImg, buffName]);
        return;
      } else if (buffImg2 && label.toLowerCase().includes('grant')) {
        weaponDetails.push([label, buffImg2, buffName]);
        return;
      } else if (buffImg3 && label.toLowerCase().includes('grant')) {
        weaponDetails.push([label, buffImg3, buffName]);
        return;
      } else if (buffImg4 && label.toLowerCase().includes('grant')) {
        weaponDetails.push([label, buffImg4, buffName]);
        return;
      } else if (buffImg5 && label.toLowerCase().includes('grant')) {
        weaponDetails.push([label, buffImg5, buffName]);
        return;
      } else if (buffImg6 && label.toLowerCase().includes('grant')) {
        weaponDetails.push([label, buffImg6, buffName]);
        return;
      }

      if (debuffImg1) {
        weaponDetails.push([
          label,
          debuffImg1,
          debuffName,
          debuffChance ? debuffChance : '100% chance',
        ]);
        return;
      } else if (debuffImg2) {
        weaponDetails.push([
          label,
          debuffImg2,
          debuffName,
          debuffChance ? debuffChance : '100% chance',
        ]);
        return;
      } else if (debuffImg3) {
        weaponDetails.push([
          label,
          debuffImg3,
          debuffName,
          debuffChance ? debuffChance : '100% chance',
        ]);
        return;
      } else if (debuffImg4) {
        weaponDetails.push([
          label,
          debuffImg4,
          debuffName,
          debuffChance ? debuffChance : '100% chance',
        ]);
        return;
      }

      if (!img) {
        const img = inflict.children('a').children('img').attr('src');
        weaponDetails.push([
          label,
          img,
          debuffName,
          debuffChance ? debuffChance : '100% chance',
        ]);
        return;
      }

      weaponDetails.push([
        label,
        img,
        debuffName,
        debuffChance ? debuffChance : '100% chance',
      ]);
      return;
    }
    if (label.toLowerCase() === 'sell') {
      const coin = $(el)
        .children('td')
        .children('span')
        .children('span')
        .children('img')
        .attr('data-src');
      weaponDetails.push([label, info, coin]);
      return;
    }
    if (label.toLowerCase() === 'rarity') {
      const rarity = $(el)
        .children('td')
        .children('a')
        .children('img')
        .attr('data-src');

      if (!rarity) {
        const rarity = $(el)
          .children('td')
          .children('a')
          .children('img')
          .attr('src');

        weaponDetails.push([label, rarity]);
        return;
      }
      weaponDetails.push([label, rarity]);
      return;
    }
    weaponDetails.push([label, info]);
  });
  itemData.itemSpecs = weaponDetails;
  recipe.each((i, el) => {
    const text = $(el).text();
    if (text.toLowerCase().includes('ingredient')) {
      isCrafting = false;
      isIngredient = true;
    }
    if (isCrafting) {
      $(el)
        .children('td')
        .children('span.i')
        .each((i, el) => {
          const craftingImg = $(el)
            .children('a')
            .children('img')
            .attr('data-src');

          const craftingName = $(el).children('span').text();
          craftingStations.push([craftingImg, craftingName]);
        });
    }
    if (isIngredient) {
      const craftingInfoBundle = [];
      $(el)
        .children('td')
        .each((i, el) => {
          if (i === 0) {
            const ingImg = $(el)
              .children('span.i')
              .children('a')
              .children('img')
              .attr('data-src');
            craftingInfoBundle.push(ingImg);
            return;
          }
          const text = $(el).text();
          craftingInfoBundle.push(text);
        });
      if (craftingInfoBundle.length) {
        if (
          craftingInfoBundle.length === 1 &&
          !!craftingInfoBundle[0] === false
        )
          return;
        craftingIngredients.push(craftingInfoBundle);
      }
    }
  });
  itemData.craftingStations = craftingStations;
  itemData.craftingIngredients = craftingIngredients;

  return itemData;
}

async function saveItemsData() {
  const weaponUrlNames = [
    ['Melee_weapons', 1],
    ['Ranged_weapons', 1000],
    ['Magic_weapons', 2000],
    ['Summon_weapons', 3000],
    ['Rogue_weapons', 4000],
    ['Classless_weapons', 5000],
  ];

  const accessoriesUrlNames = [
    ['Restorative_Accessories', 6000],
    ['Combat_Accessories', 7000],
    ['Mining_Accessories', 8000],
    ['Fishing_Accessories', 9000],
    ['Revengeance_Mode_Accessories', 10000],
    ['Movement_Accessories', 11000],
  ];

  const getPageItems = async (pageUrl, id) => {
    let theData = [];
    const itemNames = await getItemsNames(pageUrl);
    let i = 0;
    for (const name of itemNames) {
      const itemData = await scrapeData(
        `https://calamitymod.fandom.com/wiki/${name}`,
        id + i
      );
      theData.push(itemData);
      i++;
    }
    return theData;
  };

  const getCalamityItems = async weapons => {
    for (const [name, id] of weapons ? weaponUrlNames : accessoriesUrlNames) {
      const pageUrl = `https://calamitymod.fandom.com/wiki/${name}`;
      const data = await getPageItems(pageUrl, id, weapons);
      fs.writeFileSync(
        weapons ? `./weapons/${name}.json` : `./accessories/${name}.json`,
        JSON.stringify(data, null, 2)
      );
    }
  };
  getCalamityItems(true);
}
saveItemsData();
