// eslint-disable-next-line no-shadow
export enum SuccessEnum {
  contactsSentToWobaka = 'contactsSentToWobaka',
  addedToWobaka = 'addedToWobaka',
  addedToHubspot = 'addedToHubspot',
  createdKlaviyoList = 'createdKlaviyoList',
  contactsSentToKlaviyo = 'contactsSentToKlaviyo',
  addedToKlaviyo = 'addedToKlaviyo',
  integrationJobCreated = 'integrationJobCreated',
  addedToMixmax = 'addedToMixmax',
  profilesAddedToPipeline = 'profilesAddedToPipeline',
  profilesRemovedFromPipeline = 'profilesRemovedFromPipeline',
  addedToPipeline = 'addedToPipeline',
  removedFromPipeline = 'removedFromPipeline',
  addedToContent = 'addedToContent',
  removedFromContent = 'removedFromContent',
  addedToTracking = 'addedToTracking',
  removedFromTracking = 'removedFromTracking',
  lookalikeJobStarted = 'lookalikeJobStarted',
}

export type SuccessPropsType = {
  type?: string;
};
