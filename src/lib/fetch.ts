import { headers } from "next/headers";
import { throwException } from "./exceptions";

type TRequest = {
  endpoint: string;
  token?: string;
  payload?: any;
  params?: any;
};

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

//GET
export const getRequest = async ({ endpoint, token, params }: TRequest) => {
  const queryString = new URLSearchParams(params).toString();

  const res = await fetch(
    `${BACKEND_URL}${endpoint}${queryString ? `?${queryString}` : ""}`,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }
  );

  if (!res.ok) return throwException(res);

  const data = await res.json();
  return data;
};

//POst

export const postRequest = async ({ payload, token, endpoint }: TRequest) => {
  // first check if it's formdata or not

  const isFormData = payload instanceof FormData;

  const headers: { [key: string]: string } = {
    Authorization: `bearer ${token}`,
  };

  // if it's not a formdata then add defining it as a json file
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    headers,
    method: "POST",
    body: isFormData ? payload : JSON.stringify(payload),
  });
  // if (!res.ok) return throwException(res);
  if (!res.ok) {
    const errorData = await res.json();
    // console.error("Error response:", errorData);
    // console.error("Error response:", res.status);
    // throw new Error(errorData.error);
    return {
      status: res.status,
      message: errorData,
    };
  }

  const data = await res.json();
  return { status: 200, data };
};

//PATCH
export const patchRequest = async ({ payload, token, endpoint }: TRequest) => {
  const isFormData = payload instanceof FormData;

  const headers: { [key: string]: string } = {
    Authorization: `bearer ${token}`,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    headers,
    body: isFormData ? payload : JSON.stringify(payload),
    method: "PUT",
  });

  if (!res.ok) return throwException(res);

  const data = await res.json();
  return data;
};
//PUT
export const putRequest = async ({ payload, token, endpoint }: TRequest) => {
  const isFormData = payload instanceof FormData;

  const headers: { [key: string]: string } = {
    Authorization: `bearer ${token}`,
  };

  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    headers,
    body: isFormData ? payload : JSON.stringify(payload),
    method: "PUT",
  });

  if (!res.ok) return throwException(res);

  const data = await res.json();
  return data;
};

//DELETE
export const deleteRequest = async ({ endpoint, token }: TRequest) => {
  const res = await fetch(`${BACKEND_URL}${endpoint}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
  });

  if (!res.ok) return throwException(res);
  const data = await res.json();

  return data;
};
