/**
 * @fileoverview gRPC-Web generated client stub for requestspb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
// eslint-disable

const grpc = {};
grpc.web = require("grpc-web");

const proto = {};
proto.requestspb = require("./requests_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.requestspb.RequestsRPCClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options["format"] = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.requestspb.RequestsRPCPromiseClient = function (
  hostname,
  credentials,
  options
) {
  if (!options) options = {};
  options["format"] = "text";

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.GetVersionRequest,
 *   !proto.requestspb.GetVersionResponse>}
 */
const methodDescriptor_RequestsRPC_GetVersion = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/GetVersion",
  grpc.web.MethodType.UNARY,
  proto.requestspb.GetVersionRequest,
  proto.requestspb.GetVersionResponse,
  /**
   * @param {!proto.requestspb.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.GetVersionResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.GetVersionRequest,
 *   !proto.requestspb.GetVersionResponse>}
 */
const methodInfo_RequestsRPC_GetVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.GetVersionResponse,
  /**
   * @param {!proto.requestspb.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.GetVersionResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.GetVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.GetVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.getVersion = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/GetVersion",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_GetVersion,
    callback
  );
};

/**
 * @param {!proto.requestspb.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.GetVersionResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.getVersion = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/GetVersion",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_GetVersion
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.AddRequestRequest,
 *   !proto.requestspb.AddRequestResponse>}
 */
const methodDescriptor_RequestsRPC_AddRequest = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/AddRequest",
  grpc.web.MethodType.UNARY,
  proto.requestspb.AddRequestRequest,
  proto.requestspb.AddRequestResponse,
  /**
   * @param {!proto.requestspb.AddRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.AddRequestResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.AddRequestRequest,
 *   !proto.requestspb.AddRequestResponse>}
 */
const methodInfo_RequestsRPC_AddRequest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.AddRequestResponse,
  /**
   * @param {!proto.requestspb.AddRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.AddRequestResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.AddRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.AddRequestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.AddRequestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.addRequest = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/AddRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_AddRequest,
    callback
  );
};

/**
 * @param {!proto.requestspb.AddRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.AddRequestResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.addRequest = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/AddRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_AddRequest
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.DeleteRequestRequest,
 *   !proto.requestspb.DeleteRequestResponse>}
 */
const methodDescriptor_RequestsRPC_DeleteRequest = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/DeleteRequest",
  grpc.web.MethodType.UNARY,
  proto.requestspb.DeleteRequestRequest,
  proto.requestspb.DeleteRequestResponse,
  /**
   * @param {!proto.requestspb.DeleteRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.DeleteRequestResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.DeleteRequestRequest,
 *   !proto.requestspb.DeleteRequestResponse>}
 */
const methodInfo_RequestsRPC_DeleteRequest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.DeleteRequestResponse,
  /**
   * @param {!proto.requestspb.DeleteRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.DeleteRequestResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.DeleteRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.DeleteRequestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.DeleteRequestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.deleteRequest = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/DeleteRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_DeleteRequest,
    callback
  );
};

/**
 * @param {!proto.requestspb.DeleteRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.DeleteRequestResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.deleteRequest = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/DeleteRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_DeleteRequest
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.UpdateRequestRequest,
 *   !proto.requestspb.UpdateRequestResponse>}
 */
const methodDescriptor_RequestsRPC_UpdateRequest = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/UpdateRequest",
  grpc.web.MethodType.UNARY,
  proto.requestspb.UpdateRequestRequest,
  proto.requestspb.UpdateRequestResponse,
  /**
   * @param {!proto.requestspb.UpdateRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.UpdateRequestResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.UpdateRequestRequest,
 *   !proto.requestspb.UpdateRequestResponse>}
 */
const methodInfo_RequestsRPC_UpdateRequest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.UpdateRequestResponse,
  /**
   * @param {!proto.requestspb.UpdateRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.UpdateRequestResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.UpdateRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.UpdateRequestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.UpdateRequestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.updateRequest = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/UpdateRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_UpdateRequest,
    callback
  );
};

/**
 * @param {!proto.requestspb.UpdateRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.UpdateRequestResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.updateRequest = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/UpdateRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_UpdateRequest
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.GetRequestsRequest,
 *   !proto.requestspb.GetRequestsResponse>}
 */
const methodDescriptor_RequestsRPC_GetRequests = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/GetRequests",
  grpc.web.MethodType.SERVER_STREAMING,
  proto.requestspb.GetRequestsRequest,
  proto.requestspb.GetRequestsResponse,
  /**
   * @param {!proto.requestspb.GetRequestsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.GetRequestsResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.GetRequestsRequest,
 *   !proto.requestspb.GetRequestsResponse>}
 */
const methodInfo_RequestsRPC_GetRequests = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.GetRequestsResponse,
  /**
   * @param {!proto.requestspb.GetRequestsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.GetRequestsResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.GetRequestsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.GetRequestsResponse>}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.getRequests = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/requestspb.RequestsRPC/GetRequests",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_GetRequests
  );
};

/**
 * @param {!proto.requestspb.GetRequestsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.GetRequestsResponse>}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.getRequests = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/requestspb.RequestsRPC/GetRequests",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_GetRequests
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.GetRequestByIDRequest,
 *   !proto.requestspb.GetRequestByIDResponse>}
 */
const methodDescriptor_RequestsRPC_GetRequestByID = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/GetRequestByID",
  grpc.web.MethodType.UNARY,
  proto.requestspb.GetRequestByIDRequest,
  proto.requestspb.GetRequestByIDResponse,
  /**
   * @param {!proto.requestspb.GetRequestByIDRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.GetRequestByIDResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.GetRequestByIDRequest,
 *   !proto.requestspb.GetRequestByIDResponse>}
 */
const methodInfo_RequestsRPC_GetRequestByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.GetRequestByIDResponse,
  /**
   * @param {!proto.requestspb.GetRequestByIDRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.GetRequestByIDResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.GetRequestByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.GetRequestByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.GetRequestByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.getRequestByID = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/GetRequestByID",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_GetRequestByID,
    callback
  );
};

/**
 * @param {!proto.requestspb.GetRequestByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.GetRequestByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.getRequestByID = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/GetRequestByID",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_GetRequestByID
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.SearchRequestsByPostcodeRequest,
 *   !proto.requestspb.SearchRequestsByPostcodeResponse>}
 */
const methodDescriptor_RequestsRPC_SearchRequestsByPostcode = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/SearchRequestsByPostcode",
  grpc.web.MethodType.SERVER_STREAMING,
  proto.requestspb.SearchRequestsByPostcodeRequest,
  proto.requestspb.SearchRequestsByPostcodeResponse,
  /**
   * @param {!proto.requestspb.SearchRequestsByPostcodeRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.SearchRequestsByPostcodeResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.SearchRequestsByPostcodeRequest,
 *   !proto.requestspb.SearchRequestsByPostcodeResponse>}
 */
const methodInfo_RequestsRPC_SearchRequestsByPostcode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.SearchRequestsByPostcodeResponse,
  /**
   * @param {!proto.requestspb.SearchRequestsByPostcodeRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.SearchRequestsByPostcodeResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.SearchRequestsByPostcodeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.SearchRequestsByPostcodeResponse>}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.searchRequestsByPostcode = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/requestspb.RequestsRPC/SearchRequestsByPostcode",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_SearchRequestsByPostcode
  );
};

/**
 * @param {!proto.requestspb.SearchRequestsByPostcodeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.SearchRequestsByPostcodeResponse>}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.searchRequestsByPostcode = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/requestspb.RequestsRPC/SearchRequestsByPostcode",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_SearchRequestsByPostcode
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.AnswerRequestRequest,
 *   !proto.requestspb.AnswerRequestResponse>}
 */
const methodDescriptor_RequestsRPC_AnswerRequest = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/AnswerRequest",
  grpc.web.MethodType.UNARY,
  proto.requestspb.AnswerRequestRequest,
  proto.requestspb.AnswerRequestResponse,
  /**
   * @param {!proto.requestspb.AnswerRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.AnswerRequestResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.AnswerRequestRequest,
 *   !proto.requestspb.AnswerRequestResponse>}
 */
const methodInfo_RequestsRPC_AnswerRequest = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.AnswerRequestResponse,
  /**
   * @param {!proto.requestspb.AnswerRequestRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.AnswerRequestResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.AnswerRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.AnswerRequestResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.AnswerRequestResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.answerRequest = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/AnswerRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_AnswerRequest,
    callback
  );
};

/**
 * @param {!proto.requestspb.AnswerRequestRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.AnswerRequestResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.answerRequest = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/AnswerRequest",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_AnswerRequest
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.AcceptHelpRequest,
 *   !proto.requestspb.AcceptHelpResponse>}
 */
const methodDescriptor_RequestsRPC_AcceptHelp = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/AcceptHelp",
  grpc.web.MethodType.UNARY,
  proto.requestspb.AcceptHelpRequest,
  proto.requestspb.AcceptHelpResponse,
  /**
   * @param {!proto.requestspb.AcceptHelpRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.AcceptHelpResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.AcceptHelpRequest,
 *   !proto.requestspb.AcceptHelpResponse>}
 */
const methodInfo_RequestsRPC_AcceptHelp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.AcceptHelpResponse,
  /**
   * @param {!proto.requestspb.AcceptHelpRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.AcceptHelpResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.AcceptHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.AcceptHelpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.AcceptHelpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.acceptHelp = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/AcceptHelp",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_AcceptHelp,
    callback
  );
};

/**
 * @param {!proto.requestspb.AcceptHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.AcceptHelpResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.acceptHelp = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/AcceptHelp",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_AcceptHelp
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.CompleteHelpRequest,
 *   !proto.requestspb.CompleteHelpResponse>}
 */
const methodDescriptor_RequestsRPC_CompleteHelp = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/CompleteHelp",
  grpc.web.MethodType.UNARY,
  proto.requestspb.CompleteHelpRequest,
  proto.requestspb.CompleteHelpResponse,
  /**
   * @param {!proto.requestspb.CompleteHelpRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.CompleteHelpResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.CompleteHelpRequest,
 *   !proto.requestspb.CompleteHelpResponse>}
 */
const methodInfo_RequestsRPC_CompleteHelp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.CompleteHelpResponse,
  /**
   * @param {!proto.requestspb.CompleteHelpRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.CompleteHelpResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.CompleteHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.CompleteHelpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.CompleteHelpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.completeHelp = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/CompleteHelp",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_CompleteHelp,
    callback
  );
};

/**
 * @param {!proto.requestspb.CompleteHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.CompleteHelpResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.completeHelp = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/CompleteHelp",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_CompleteHelp
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.requestspb.CancelHelpRequest,
 *   !proto.requestspb.CancelHelpResponse>}
 */
const methodDescriptor_RequestsRPC_CancelHelp = new grpc.web.MethodDescriptor(
  "/requestspb.RequestsRPC/CancelHelp",
  grpc.web.MethodType.UNARY,
  proto.requestspb.CancelHelpRequest,
  proto.requestspb.CancelHelpResponse,
  /**
   * @param {!proto.requestspb.CancelHelpRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.CancelHelpResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.requestspb.CancelHelpRequest,
 *   !proto.requestspb.CancelHelpResponse>}
 */
const methodInfo_RequestsRPC_CancelHelp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.requestspb.CancelHelpResponse,
  /**
   * @param {!proto.requestspb.CancelHelpRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.requestspb.CancelHelpResponse.deserializeBinary
);

/**
 * @param {!proto.requestspb.CancelHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.requestspb.CancelHelpResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.requestspb.CancelHelpResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.requestspb.RequestsRPCClient.prototype.cancelHelp = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/requestspb.RequestsRPC/CancelHelp",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_CancelHelp,
    callback
  );
};

/**
 * @param {!proto.requestspb.CancelHelpRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.requestspb.CancelHelpResponse>}
 *     A native promise that resolves to the response
 */
proto.requestspb.RequestsRPCPromiseClient.prototype.cancelHelp = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/requestspb.RequestsRPC/CancelHelp",
    request,
    metadata || {},
    methodDescriptor_RequestsRPC_CancelHelp
  );
};

module.exports = proto.requestspb;
