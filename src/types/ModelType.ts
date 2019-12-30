export interface ModelType<T> {
  namespace: string;
  state: T;
  effects: {
    [methodName:string] : (params:any, methods:any)=>void;
  };
  reducers: {
    [methodName:string] : (state:T, params:any)=>T;
  };
}
