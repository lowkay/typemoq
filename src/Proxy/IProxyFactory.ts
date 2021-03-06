﻿/// <reference path='_all.ts' />

module TypeMoq.Proxy {
    export interface IProxyFactory {
        createProxy<T>(interceptor: ICallInterceptor, instance: T): T;
    }
}  