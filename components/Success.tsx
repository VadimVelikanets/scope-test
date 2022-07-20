import React, { useEffect } from 'react';
import { useNotificationContext } from 'context/NotificationContext';
import { SuccessEnum, type SuccessPropsType } from './Success.types';

function getSuccessMessage(type?: string): string {
  switch (type) {
    case SuccessEnum.contactsSentToWobaka:
      return 'Contacts sent to Wobaka';
    case SuccessEnum.addedToWobaka:
      return 'Added to Wobaka';
    case SuccessEnum.addedToHubspot:
      return 'Added to Hubspot';
    case SuccessEnum.createdKlaviyoList:
      return 'New list created';
    case SuccessEnum.contactsSentToKlaviyo:
      return 'Contacts sent to Klaviyo';
    case SuccessEnum.addedToKlaviyo:
      return 'Added to Klaviyo';
    case SuccessEnum.integrationJobCreated:
      return 'Integration job created.';
    case SuccessEnum.addedToMixmax:
      return 'Added to Mixmax';
    case SuccessEnum.profilesAddedToPipeline:
      return 'Profiles added to Pipeline';
    case SuccessEnum.profilesRemovedFromPipeline:
      return 'Profiles removed from Pipeline';
    case SuccessEnum.addedToPipeline:
      return 'Added to Pipeline';
    case SuccessEnum.removedFromPipeline:
      return 'Removed from Pipeline';
    case SuccessEnum.addedToContent:
      return 'Added to Content';
    case SuccessEnum.removedFromContent:
      return 'Removed from Content';
    case SuccessEnum.addedToTracking:
      return 'Added to Tracking';
    case SuccessEnum.removedFromTracking:
      return 'Removed from Tracking';
    case SuccessEnum.lookalikeJobStarted:
      return 'Lookalike job started!';
    default:
      return 'Updated';
  }
}

function Success({ type }: SuccessPropsType): JSX.Element {
  const { setSuccessMessage } = useNotificationContext();

  useEffect(() => {
    setTimeout(() => setSuccessMessage({ isSuccess: false }), 2000);
  }, [setSuccessMessage]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-2/4 bg-gray-700 text-white py-3 px-6 rounded-md text-center z-50">
      <div>
        <p>{getSuccessMessage(type)}</p>
      </div>
    </div>
  );
}

export default Success;
