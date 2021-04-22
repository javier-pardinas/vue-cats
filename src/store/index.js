import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats: [
      {"id": 1, "name": "Pepe", "description": "White", "imageUrl": "https://previews.123rf.com/images/lempro/lempro2005/lempro200500369/148763297-white-cat-with-white-eyes-in-a-kitchen-snare.jpg"},
      {"id": 2, "name": "Paco", "description": "Black", "imageUrl": "https://cdn.wimmel-napkins.com/F/1/PD/gPD-191963.jpg"},
      {"id": 3, "name": "María", "description": "Orange", "imageUrl": "https://www.thesprucepets.com/thmb/2CblSaJ4EidbxhM8721TbWZgkXU=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/cat-lying-down-in-grass-80611475-57d98b895f9b5865165d9e63-5967bd215f9b5816183acbe9.jpg"},
      {"id": 4, "name": "Teresa", "description": "Grey", "imageUrl": "https://d8i8h9m5.stackpathcdn.com/theme-content/uploads/2020/01/grey-chartreux-cat-with-brown-eyes-1024x682.jpg?x61119"},
      {"id": 5, "name": "Luis", "description": "White", "imageUrl": "https://image.posterlounge.es/img/products/500000/493425/493425_poster_l.jpg"},
      {"id": 6, "name": "William", "description": "Black", "imageUrl": "https://www.thebookseller.com/sites/default/files/styles/large/public/uploads/wltb-import/uploads/legacy/shutterstock_8008522.jpg?itok=7xIA-hF5"},
      {"id": 7, "name": "Cecilia", "description": "Orange", "imageUrl": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F07%2F20%2Forange-cats-1070960066-1-2000.jpg"},
      {"id": 8, "name": "Alba", "description": "Grey", "imageUrl": "https://i2.wp.com/www.poochncat.com/wp-content/uploads/2020/08/gray-cat.jpg?fit=660%2C660&ssl=1"},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
