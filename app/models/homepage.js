import Backbone from 'backbone';
import data from '../../data/data.json';

export default class HomePageModel extends Backbone.Model {
  defaults() {
    return {
      sortedSectionsByPosition: data.sort((a, b) => (a.position > b.position) ? 1 : -1),
      bannerlist: {},
      menu: {},
      productlist: {},
      promo: {},
      watches: {},
      blog: {},
      header: {},
      footer: {}
    }
  }
}
