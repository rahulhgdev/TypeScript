// importing normal export - needs to pass required things inside {}
import {greet, shoutOut} from '../export/export'

// importing default export - no need to add {}
import defaultEx from '../export/export';

greet("Rahul");
shoutOut('15');

defaultEx(20);