import { LightningElement, api } from 'lwc';
import { getFieldValue } from 'lightning/uiRecordApi';
import PHONE_FIELD from '@salesforce/schema/Lead.Phone';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import STATUS_FIELD from '@salesforce/schema/Lead.Status';

export default class LeadInformation extends LightningElement {
@api lead;

get hasLead() {
return this.lead !== undefined;
}

get name() {
return this.lead.FirstName + ' ' + this.lead.LastName;
}

get company() {
return getFieldValue(this.lead, COMPANY_FIELD);
}

get status() {
return getFieldValue(this.lead, STATUS_FIELD);
}
}