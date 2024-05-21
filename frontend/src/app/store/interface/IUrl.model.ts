
export interface visitHistory{
    _id?:object
    timestamp:number
}

export interface IUrlShort{
    id?:object;
    shortUrl:string;
    redirectUrl:string;
    visitHistory:visitHistory[],
    createdAt:Date;
    updatedAt:Date;
}
export interface IUrlData{
    data:IUrlShort;
    message:string;
}
export interface IUrlData_getUrl{
    data:string;
    message:string;
}
export interface IAnalytics{
    analytics:visitHistory[],
    totalClicks:number;
}
export interface IAnalyticsData{
    data:IAnalytics;
    message:string;
}
