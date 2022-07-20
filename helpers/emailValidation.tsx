import type React from 'react';
import type { ProfileType } from 'components/Search/ProfilesList.types';

const emailValidation = (
  value: string,
  profileId: string,
  setEmailError: React.Dispatch<React.SetStateAction<ProfileType['id']>>,
): boolean => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i;

  if ((!value || regex.test(value) === false) && profileId) {
    setEmailError(profileId);
    return false;
  }
  setEmailError('');
  return true;
};

export default emailValidation;
