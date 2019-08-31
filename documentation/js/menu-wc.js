'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">unibrew documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' : 'data-target="#xs-components-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' :
                                            'id="xs-components-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AdminLoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AdminLoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DragDropComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DragDropComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DriverComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DriverComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DriverListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DriverListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FlagsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FlagsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrintLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrintLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizIntroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuizIntroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecondaryFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' : 'data-target="#xs-injectables-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' :
                                        'id="xs-injectables-links-module-AppModule-75363bb5568bcbc5ef5dfb7a58c7e6e5"' }>
                                        <li class="link">
                                            <a href="injectables/DriverService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DriverService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Driver.html" data-type="entity-link">Driver</a>
                            </li>
                            <li class="link">
                                <a href="classes/MainFormItem.html" data-type="entity-link">MainFormItem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link">Question</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MainFormService.html" data-type="entity-link">MainFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuizService.html" data-type="entity-link">QuizService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});