import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "username":"HakataRecife",
    "name":"Restaurante Hakata",
    "id":"1390984821133074",
    "category":"Restaurante japonês",
    "food_styles":[
      "Chinesa",
      "Japonês"
    ],
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "latitude":-8.060598,
      "longitude":-34.8992947,
      "state":"PE",
      "street":"Rua Viscondessa do Livramento,182 - Derby",
      "zip":"52010-060"
    },
    "cover":{
      "cover_id":"1750424265189126",
      "offset_x":40,
      "offset_y":0,
      "source":"https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/12933020_1750424265189126_1740836165313179118_n.png?_nc_cat=0&oh=f7021233a13c1dc82e9d12811c9fcced&oe=5B6FBA36",
      "id":"1750424265189126"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12928257_1750424741855745_5665471302935913451_n.png?_nc_cat=0&oh=7c62a7346a82ba260903491ef27f737a&oe=5B9A3BB1",
        "width":50
      }
    }
  };


  constructor() {
    let items = 
[
  {
    "username":"HakataRecife",
    "name":"Restaurante Hakata",
    "id":"1390984821133074",
    "category":"Restaurante japonês",
    "food_styles":[
      "Chinesa",
      "Japonês"
    ],
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "latitude":-8.060598,
      "longitude":-34.8992947,
      "state":"PE",
      "street":"Rua Viscondessa do Livramento,182 - Derby",
      "zip":"52010-060"
    },
    "cover":{
      "cover_id":"1750424265189126",
      "offset_x":40,
      "offset_y":0,
      "source":"https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/12933020_1750424265189126_1740836165313179118_n.png?_nc_cat=0&oh=f7021233a13c1dc82e9d12811c9fcced&oe=5B6FBA36",
      "id":"1750424265189126"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12928257_1750424741855745_5665471302935913451_n.png?_nc_cat=0&oh=7c62a7346a82ba260903491ef27f737a&oe=5B9A3BB1",
        "width":50
      }
    }
  },
  {
    "username":"ThePokeBowlBr",
    "name":"The Poke Bowl",
    "id":"1730661680581456",
    "category":"Restaurante de fast-food",
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "latitude":-8.0649682348946,
      "longitude":-34.873874146042,
      "state":"PE",
      "street":"R. Alfândega, 35"
    },
    "cover":{
      "cover_id":"1840424232938533",
      "offset_x":0,
      "offset_y":68,
      "source":"https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/21125704_1840424232938533_5106889119780105373_o.jpg?_nc_cat=0&oh=4241a6c785332ba68a9a5c9e89aef6f0&oe=5B50E3DB",
      "id":"1840424232938533"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/19554855_1905206619793627_4315163324651567057_n.png?_nc_cat=0&oh=b5579143b7570e798f18096739aeec9e&oe=5B6DE358",
        "width":50
      }
    }
  },
  {
    "username":"NipponSushi",
    "name":"Nippon Sushi",
    "id":"504344082938929",
    "category":"Restaurante japonês",
    "food_styles":[
      "Bufês",
      "Chinesa",
      "Sushi Bar",
      "Taiwanesa"
    ],
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "latitude":-8.04715,
      "longitude":-34.90598,
      "state":"PE",
      "street":"Rua Padre Anchieta, 291",
      "zip":"50710-430"
    },
    "cover":{
      "cover_id":"1631318850241441",
      "offset_x":0,
      "offset_y":0,
      "source":"https://scontent.xx.fbcdn.net/v/t31.0-8/s720x720/17760936_1631318850241441_7494475272829252191_o.jpg?_nc_cat=0&oh=f411d8c477ca14f29782ddc157607437&oe=5B50A7D4",
      "id":"1631318850241441"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/11831785_1021685964538069_4812569825255427644_n.png?_nc_cat=0&oh=367ba8fba00b12962b04f49ed382aae6&oe=5B583D71",
        "width":50
      }
    }
  },
  {
    "username":"ZenComidaJaponesa",
    "name":"ZEN Comida Japonesa",
    "id":"158852867527508",
    "category":"Restaurante japonês",
    "food_styles":[
      "Sushi Bar"
    ],
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "latitude":-8.0439770402498,
      "longitude":-34.893005423394,
      "state":"PE",
      "street":"Rua Da Hora 295, Espinheiro",
      "zip":"52020010"
    },
    "cover":{
      "cover_id":"1508369192575862",
      "offset_x":0,
      "offset_y":0,
      "source":"https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/22154536_1508369192575862_151113753598551018_n.jpg?_nc_cat=0&oh=b80b84a2f3d068f094116f9fc20544c9&oe=5B62C1EB",
      "id":"1508369192575862"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/22279510_1508366099242838_5413547816352969968_n.jpg?_nc_cat=0&oh=8ecee74eea1a2546ab39445a7c670e2c&oe=5B65DC1C",
        "width":50
      }
    }
  },
  {
    "username":"genkioriental",
    "name":"Genki Sushi",
    "id":"677590095681121",
    "category":"Restaurante japonês",
    "food_styles":[
      "Brasileira",
      "Chinesa",
      "Lanchonetes",
      "Fast-food",
      "Japonês",
      "Frutos do mar",
      "Culinária do Sul dos EUA (soul food)",
      "Sushi Bar"
    ],
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "state":"PE",
      "street":"Rua do Espinheiro, 559",
      "zip":"52020020"
    },
    "cover":{
      "cover_id":"1267647420008716",
      "offset_x":0,
      "offset_y":0,
      "source":"https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/23316772_1267647420008716_8096386059920707109_n.png?_nc_cat=0&oh=3559ad254cbd1c7ef6ca975daac23dbe&oe=5B6FA49D",
      "id":"1267647420008716"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/25348306_1297880183652106_5008291430855031736_n.png?_nc_cat=0&oh=f163c4eb8aca659a355b7ed8152a9217&oe=5B5131CB",
        "width":50
      }
    }
  },
  {
    "username":"unitemakeria",
    "name":"Uni Temakeria",
    "id":"220602374771955",
    "category":"Restaurante japonês",
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "latitude":-8.0443148366702,
      "longitude":-34.947381019592,
      "state":"PE",
      "street":"Rua General Polidoro, 777",
      "zip":"50740-050"
    },
    "cover":{
      "cover_id":"818728228292697",
      "offset_x":0,
      "offset_y":0,
      "source":"https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/18664545_818728228292697_3284783916607084233_n.png?_nc_cat=0&oh=f8604be53b48f620909ce1c33e00a591&oe=5B621C75",
      "id":"818728228292697"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/18620016_818745761624277_2042992391556090271_n.png?_nc_cat=0&oh=02214004ddc8a3ac7202b8b5e9bebd6f&oe=5B5BD0A3",
        "width":50
      }
    }
  },
  {
    "username":"JoJooSushi",
    "name":"Jojoo Creative Sushi",
    "id":"241263989374749",
    "category":"Restaurante japonês",
    "food_styles":[
      "Sushi Bar"
    ],
    "location":{
      "city":"Recife",
      "country":"Brazil",
      "latitude":-8.0341,
      "longitude":-34.9217299,
      "state":"PE",
      "street":"AVENIDA 17 DE AGOSTO 1649",
      "zip":"52061-540"
    },
    "cover":{
      "cover_id":"714644045370072",
      "offset_x":0,
      "offset_y":0,
      "source":"https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/15965178_714644045370072_6823715231732973890_n.jpg?_nc_cat=0&oh=8a9126efff35e9fa346d44e476e63cda&oe=5B5823B4",
      "id":"714644045370072"
    },
    "picture":{
      "data":{
        "height":50,
        "is_silhouette":false,
        "url":"https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/15941108_714643865370090_3457370096077364822_n.jpg?_nc_cat=0&oh=a7ef8fa8cfeb0cdcd78ed12c8b4b0e7a&oe=5B5E0EBF",
        "width":50
      }
    }
  }
];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
