

export type serviceType = {
    serviceId:number;
    title:string;
    description:string;
    price:number;
    image:string;
    category:string;
}

export type loginFormType = {
    userEmail:string;
    userPassword:string;
}

export type userType = {
    userName:string,
    userEmail:string,
    userPassword:string,
    userRole:string,
    bookingId:number[]
}