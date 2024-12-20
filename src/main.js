import { render } from "./render.js";
import HeaderProfileView from './view/header-profile-view.js'
import FooterStatisticView from './view/footer-statistic-view.js'
import FilmPresenter from './presenters/film-presenter.js'
import FilmModel from './model/film-model.js'
import CommentModel from './model/comment-model.js'


const body = document.querySelector('body')
const header = body.querySelector('.header')
const siteMainElement = body.querySelector('.main')
const footer = body.querySelector('.footer')
const filmPresente = new FilmPresenter();
const commentModal = new CommentModel ();
const filmModel = new FilmModel (commentModal);


render (new HeaderProfileView(),header);
render ( new FooterStatisticView (),footer);
filmPresente.init(siteMainElement,filmModel,commentModal);