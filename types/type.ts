export interface ICarouselImgs {
  id: string | number;
  src?: string;
  alt?: string;
}

export interface IDropdownItem {
  value: string;
  title: React.ReactNode;
}

export type ParamsType = "postId";

export interface FetchErrorType extends Error {
  code?: number;
  info?: {
    errorCode: string;
    message: string;
  };
}
