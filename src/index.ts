import {ModuleWithProviders, NgModule} from '@angular/core';

import {NgbAccordionModule, NgbPanelChangeEvent} from './accordion/accordion.module';
import {NgbAlertModule} from './alert/alert.module';
import {NgbButtonsModule} from './buttons/buttons.module';
import {NgbCarouselModule} from './carousel/carousel.module';
import {NgbCollapseModule} from './collapse/collapse.module';
import {NgbDatepickerModule} from './datepicker/datepicker.module';
import {NgbDropdownModule} from './dropdown/dropdown.module';
import {ModalDismissReasons, NgbModal, NgbModalModule, NgbModalOptions, NgbModalRef} from './modal/modal.module';
import {NgbPaginationModule} from './pagination/pagination.module';
import {NgbPopoverModule} from './popover/popover.module';
import {NgbProgressbarModule} from './progressbar/progressbar.module';
import {NgbRatingModule} from './rating/rating.module';
import {NgbTabChangeEvent, NgbTabsetModule} from './tabset/tabset.module';
import {NgbTimepickerModule} from './timepicker/timepicker.module';
import {NgbTooltipModule} from './tooltip/tooltip.module';
import {NgbTypeaheadModule, NgbTypeaheadSelectItemEvent} from './typeahead/typeahead.module';

export {
  NgbAccordion,
  NgbAccordionConfig,
  NgbAccordionModule,
  NgbPanel,
  NgbPanelChangeEvent,
  NgbPanelContent,
  NgbPanelTitle
} from './accordion/accordion.module';
export {NgbAlert, NgbAlertConfig, NgbAlertModule} from './alert/alert.module';
export {NgbButtonsModule, NgbCheckBox, NgbRadioGroup} from './buttons/buttons.module';
export {NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbSlide} from './carousel/carousel.module';
export {NgbCollapse, NgbCollapseModule} from './collapse/collapse.module';
export {
  NgbCalendar,
  NgbCalendarIslamicCivil,
  NgbCalendarIslamicUmalqura,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepicker,
  NgbDatepickerConfig,
  NgbDatepickerI18n,
  NgbDatepickerModule,
  NgbDateStruct,
  NgbInputDatepicker
} from './datepicker/datepicker.module';
export {NgbDropdown, NgbDropdownConfig, NgbDropdownModule} from './dropdown/dropdown.module';
export {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
  NgbModalModule,
  NgbModalOptions,
  NgbModalRef
} from './modal/modal.module';
export {NgbPagination, NgbPaginationConfig, NgbPaginationModule} from './pagination/pagination.module';
export {NgbPopover, NgbPopoverConfig, NgbPopoverModule} from './popover/popover.module';
export {NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule} from './progressbar/progressbar.module';
export {NgbRating, NgbRatingConfig, NgbRatingModule} from './rating/rating.module';
export {
  NgbTab,
  NgbTabChangeEvent,
  NgbTabContent,
  NgbTabset,
  NgbTabsetConfig,
  NgbTabsetModule,
  NgbTabTitle
} from './tabset/tabset.module';
export {NgbTimepicker, NgbTimepickerConfig, NgbTimepickerModule, NgbTimeStruct} from './timepicker/timepicker.module';
export {NgbTooltip, NgbTooltipConfig, NgbTooltipModule} from './tooltip/tooltip.module';
export {
  NgbHighlight,
  NgbTypeahead,
  NgbTypeaheadConfig,
  NgbTypeaheadModule,
  NgbTypeaheadSelectItemEvent
} from './typeahead/typeahead.module';
export {Placement} from './util/positioning';

const NGB_MODULES = [
  NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule,
  NgbDropdownModule, NgbModalModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule,
  NgbTabsetModule, NgbTimepickerModule, NgbTooltipModule, NgbTypeaheadModule
];

@NgModule({
  imports: [
    NgbAlertModule.forRoot(), NgbButtonsModule.forRoot(), NgbCollapseModule.forRoot(), NgbProgressbarModule.forRoot(),
    NgbTooltipModule.forRoot(), NgbTypeaheadModule.forRoot(), NgbAccordionModule.forRoot(), NgbCarouselModule.forRoot(),
    NgbDatepickerModule.forRoot(), NgbDropdownModule.forRoot(), NgbModalModule.forRoot(), NgbPaginationModule.forRoot(),
    NgbPopoverModule.forRoot(), NgbProgressbarModule.forRoot(), NgbRatingModule.forRoot(), NgbTabsetModule.forRoot(),
    NgbTimepickerModule.forRoot(), NgbTooltipModule.forRoot()
  ],
  exports: NGB_MODULES
})
export class NgbRootModule {}

@NgModule({imports: NGB_MODULES, exports: NGB_MODULES})
export class NgbModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgbRootModule};
  }
}
