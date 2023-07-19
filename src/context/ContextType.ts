/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */
export enum ContextTypes {
  Chart = 'fdc3.chart',
  ChatInitSettings = 'fdc3.chat.initSettings',
  Contact = 'fdc3.contact',
  ContactList = 'fdc3.contactList',
  Country = 'fdc3.country',
  Currency = 'fdc3.currency',
  Email = 'fdc3.email',
  Instrument = 'fdc3.instrument',
  InstrumentList = 'fdc3.instrumentList',
  Organization = 'fdc3.organization',
  Portfolio = 'fdc3.portfolio',
  Position = 'fdc3.position',
  Nothing = 'fdc3.nothing',
  TimeRange = 'fdc3.timerange',
  Valuation = 'fdc3.valuation',
}

export type ContextType = ContextTypes | string;
