import { destinations } from '../data/destinations.js';
import { offers } from '../data/offers.js';
import { points } from '../data/points.js';


export default class PointsModel {
  destinations = [];
  offers = [];
  points = [];

  constructor (){
    this.destinations = destinations;
    this.offers = offers;
    this.points = points;
  }

  getPoints(){
    return this.points;
  }

  getDestinations(){
    return this.destinations;
  }

  getOffers (){
    return this.offers;
  }

  // Метод который ищет в Destinations не все массивы, а только id
  getDestinationById(id){
    return this.destinations.find((item) => item.id === id);
  }

  // Метод который ищет в offer не все массивы, а только type
  getOffersByType(type){
    return this.offers.find((item) => item.type === type);
  }
}
