import React, { useEffect } from 'react';
import { useNotificationContext } from 'context/NotificationContext';
import ButtonIcon from './ButtonIcon';
import { ErrorEnum, type ErrorPropsType } from './Error.types';

function getErrorMessage(type?: string): string {
  switch (type) {
    case ErrorEnum.wobakaApiMissing:
      return 'Please provide your api key for Wobaka under /user/integrations/';
    case ErrorEnum.failedApiMessage:
      return 'Failed, try to visit /user/integrations/ and reauthenticate.';
    default:
      return 'Error';
  }
}

function Error({ type }: ErrorPropsType): JSX.Element {
  const { setErrorMessage } = useNotificationContext();

  useEffect(() => {
    if (type) {
      setTimeout(() => setErrorMessage({ isError: false }), 2000);
    }
  }, [setErrorMessage, type]);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-2/4 bg-red-700 text-white p-4 rounded-md text-center">
      {type ? (
        getErrorMessage(type)
      ) : (
        <div>
          <div className="absolute top-1 right-1">
            <ButtonIcon onClick={() => setErrorMessage({ isError: false })} color="text-white" />
          </div>
          <p>Error!</p>
          <p>There was an error, please contact us</p>
        </div>
      )}
    </div>
  );
}

export default Error;
