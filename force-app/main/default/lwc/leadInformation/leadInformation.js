import { LightningElement, api } from 'lwc';

export default class LeadInformation extends LightningElement {
  @api lead;

  get hasLead() {
    return this.lead !== undefined;
  }
}
