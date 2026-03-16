import {render} from '../render.js';
import BoardView from '../view/board-view.js';
import PointView from '../view/point-view.js';
import EditPointView from '../view/point-edit-view.js';
import SortView from '../view/sort-view.js';

export default class BoardPresenter {
  listPoint = new BoardView();
  pointComponent = new PointView();
  editPointComponent = new EditPointView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.points = this.pointsModel.getPoints().slice();
    render(new SortView(), this.boardContainer);
    render(this.listPoint, this.boardContainer);
    // render(this.taskListComponent, this.boardComponent.getElement());
    // render(new TaskEditView(), this.taskListComponent.getElement());

    for (let i = 0; i < this.points.length ; i++) {
      const point = this.points[i];
      const destination = this.pointsModel.getDestinationById(point.destination);
      const offers = this.pointsModel
        .getOffersByType(point.type).offers
        .filter((offer) => point.offers
          .includes(offer.id));

      const allDestinations = this.pointsModel.getDestinations().map((item) => item.name);
      const allTypeOffers = this.pointsModel.getOffers().map((item) => item.type);
      const offersType = this.pointsModel.getOffersByType(point.type).offers;

      render(new PointView(point, destination,offers), this.listPoint.getElement()); // 1 аргумент cписок
      render(new EditPointView(point,destination,allDestinations,allTypeOffers,offersType), this.listPoint.getElement()); // 2 аргумент форма
    }
  }
}
