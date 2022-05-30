// Dependencies
// Local | React-Redux
import html from '@/assets/icons/html.svg'
import css from '@/assets/icons/css.svg'
import js from '@/assets/icons/js.svg'
import vscode from '@/assets/icons/vscode.svg'
import php from '@/assets/icons/php.svg'
import sql from '@/assets/icons/sql.svg'
import react from '@/assets/icons/react.svg'
import redux from '@/assets/icons/redux.svg'
import sass from '@/assets/icons/sass.svg'
import npm from '@/assets/icons/npm.svg'
import wordpress from '@/assets/icons/wordpress.svg'
import git from '@/assets/icons/git.svg'
import linux from '@/assets/icons/linux.svg'
import win from '@/assets/icons/win.svg'
import figma from '@/assets/icons/sass.svg'
import canva from '@/assets/icons/canva.svg'
// Styles
import SectionTitle from '../SectionTitle';
import './skills.scss';

function Skills() {
    return (
        <div className="skills">
            <SectionTitle title="Compétences" />
            <div className="skills__cards">
                <div className="skills__cards__card skills__cards__card--common">
                    <div className="skills__cards__card--ctn">
                        <div className="skills__cards__card__logo" data-skills="common" />
                        <h3 className="skills__cards__card__title">Communes</h3>
                        <div className="skills__cards__card__list">
                            <div className="skills__cards__card__list__item" aria-label="Intégration HTML propre et sémantique" data-cooltipz-dir="top">
                                <img src={html} alt="html icon" className="skills__cards__card__list__item__icon" />
                                HTML
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Mise en forme grâce au CSS" data-cooltipz-dir="top">
                                <img src={css} alt="css icon" className="skills__cards__card__list__item__icon" />
                                CSS
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Javascript Vanilla" data-cooltipz-dir="top">
                                <img src={js} alt="js icon" className="skills__cards__card__list__item__icon" />
                                JS
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Éditeur de code" data-cooltipz-dir="top">
                                <img src={vscode} alt="vscode icon" className="skills__cards__card__list__item__icon" />
                                VScode
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Programmation Orientée Objet" data-cooltipz-dir="top">
                                <img src={php} alt="php icon" className="skills__cards__card__list__item__icon" />
                                PHP
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Gestion de BDD" data-cooltipz-dir="top">
                                <img src={sql} alt="sql icon" className="skills__cards__card__list__item__icon" />
                                SQL
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__cards__card skills__cards__card--spec">
                    <div className="skills__cards__card--ctn">
                        <div className="skills__cards__card__logo" data-skills="spec" />
                        <h3 className="skills__cards__card__title">Spécialisation</h3>
                        <div className="skills__cards__card__list">
                            <div className="skills__cards__card__list__item" aria-label="Développement React" data-cooltipz-dir="top">
                                <img src={react} alt="react icon" className="skills__cards__card__list__item__icon" />
                                React.JS
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Gestion d'état" data-cooltipz-dir="top">
                                <img src={redux} alt="redux icon" className="skills__cards__card__list__item__icon" />
                                Redux
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Feuille de style" data-cooltipz-dir="top">
                                <img src={sass} alt="sass icon" className="skills__cards__card__list__item__icon" />
                                SASS
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Gestion de projet" data-cooltipz-dir="top">
                                <img src={npm} alt="npm icon" className="skills__cards__card__list__item__icon" />
                                NPM
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__cards__card skills__cards__card--divers">
                    <div className="skills__cards__card--ctn">
                        <div className="skills__cards__card__logo" data-skills="divers" />
                        <h3 className="skills__cards__card__title">Diverses</h3>
                        <div className="skills__cards__card__list">
                            <div className="skills__cards__card__list__item" aria-label="Création de site" data-cooltipz-dir="top">
                                <img src={wordpress} alt="wordpress icon" className="skills__cards__card__list__item__icon" />
                                WP
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Utilisation de Git" data-cooltipz-dir="top">
                                <img src={git} alt="git icon" className="skills__cards__card__list__item__icon" />
                                Git
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Utilisation de Linux" data-cooltipz-dir="top">
                                <img src={linux} alt="linux icon" className="skills__cards__card__list__item__icon" />
                                Linux
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Utilisation de Windows" data-cooltipz-dir="top">
                                <img src={win} alt="win icon" className="skills__cards__card__list__item__icon" />
                                Win
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Création de maquettes" data-cooltipz-dir="top">
                                <img src={figma} alt="figma icon" className="skills__cards__card__list__item__icon" />
                                Figma
                            </div>
                            <div className="skills__cards__card__list__item" aria-label="Création de design" data-cooltipz-dir="top">
                                <img src={canva} alt="canva icon" className="skills__cards__card__list__item__icon" />
                                Canva
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
