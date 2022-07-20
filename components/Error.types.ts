// eslint-disable-next-line no-shadow
export enum ErrorEnum {
  wobakaApiMissing = 'wobakaApiMissing',
  failedApiMessage = 'failedApiMessage',
}

export type ErrorPropsType = {
  type?: string;
};
