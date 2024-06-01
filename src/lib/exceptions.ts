export const throwException = async (res: Response) => {
  let errorMessage;
  //MESSAGE PARRT HANDLE
  const { message } = await res.json();
  if (typeof message === "object") {
    errorMessage = message[0];
  } else {
    errorMessage = message;
  }

  //STATUS CODE HANDLE

  switch (res.status) {
    case 400:
      throw new Error(
        errorMessage ||
          "The server cannot process the request due to client error"
      );

    case 401:
      throw new Error(errorMessage || "Unauthorized: Please login again.");

    case 403:
      throw new Error(
        errorMessage || "You don't have permission to access this resources."
      );

    case 404:
      throw new Error(errorMessage || "The requested resouce was not found.");

    case 500:
      throw new Error(errorMessage || "Something went wrong in server");

    case 502:
      throw new Error(
        errorMessage ||
          "The server received an invalid response from an upstream server."
      );
    case 503:
      throw new Error(
        errorMessage ||
          "The server is currently unable to handle the request due to temporary overload or maintenance of the server."
      );
    case 504:
      throw new Error(
        errorMessage ||
          "The server did not receive a timely response from the upstream server."
      );

    default:
      throw new Error("An unexpected error occured.");
  }
};
