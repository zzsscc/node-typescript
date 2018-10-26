import express = require('express');

declare global {
  namespace Express {
    export interface Response {
      ssr: (pathname: string, query?: any) => void;
      uuid?: string;
    }

    export interface Request {
      uuid?: string;
      file?: Buffer;
      user?: any;
    }
  }
}