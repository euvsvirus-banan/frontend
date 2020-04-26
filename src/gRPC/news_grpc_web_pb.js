/**
 * @fileoverview gRPC-Web generated client stub for newspb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
// eslint-disable

const grpc = {};
grpc.web = require("grpc-web");

const proto = {};
proto.newspb = require("./news_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.newspb.NewsRPCClient = function (hostname, credentials, options) {
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
proto.newspb.NewsRPCPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.newspb.GetVersionRequest,
 *   !proto.newspb.GetVersionResponse>}
 */
const methodDescriptor_NewsRPC_GetVersion = new grpc.web.MethodDescriptor(
  "/newspb.NewsRPC/GetVersion",
  grpc.web.MethodType.UNARY,
  proto.newspb.GetVersionRequest,
  proto.newspb.GetVersionResponse,
  /**
   * @param {!proto.newspb.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.GetVersionResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.newspb.GetVersionRequest,
 *   !proto.newspb.GetVersionResponse>}
 */
const methodInfo_NewsRPC_GetVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.newspb.GetVersionResponse,
  /**
   * @param {!proto.newspb.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.GetVersionResponse.deserializeBinary
);

/**
 * @param {!proto.newspb.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.newspb.GetVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.GetVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCClient.prototype.getVersion = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/newspb.NewsRPC/GetVersion",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_GetVersion,
    callback
  );
};

/**
 * @param {!proto.newspb.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.newspb.GetVersionResponse>}
 *     A native promise that resolves to the response
 */
proto.newspb.NewsRPCPromiseClient.prototype.getVersion = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/newspb.NewsRPC/GetVersion",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_GetVersion
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.newspb.AddNewRequest,
 *   !proto.newspb.AddNewResponse>}
 */
const methodDescriptor_NewsRPC_AddNew = new grpc.web.MethodDescriptor(
  "/newspb.NewsRPC/AddNew",
  grpc.web.MethodType.UNARY,
  proto.newspb.AddNewRequest,
  proto.newspb.AddNewResponse,
  /**
   * @param {!proto.newspb.AddNewRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.AddNewResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.newspb.AddNewRequest,
 *   !proto.newspb.AddNewResponse>}
 */
const methodInfo_NewsRPC_AddNew = new grpc.web.AbstractClientBase.MethodInfo(
  proto.newspb.AddNewResponse,
  /**
   * @param {!proto.newspb.AddNewRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.AddNewResponse.deserializeBinary
);

/**
 * @param {!proto.newspb.AddNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.newspb.AddNewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.AddNewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCClient.prototype.addNew = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/newspb.NewsRPC/AddNew",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_AddNew,
    callback
  );
};

/**
 * @param {!proto.newspb.AddNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.newspb.AddNewResponse>}
 *     A native promise that resolves to the response
 */
proto.newspb.NewsRPCPromiseClient.prototype.addNew = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/newspb.NewsRPC/AddNew",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_AddNew
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.newspb.DeleteNewRequest,
 *   !proto.newspb.DeleteNewResponse>}
 */
const methodDescriptor_NewsRPC_DeleteNew = new grpc.web.MethodDescriptor(
  "/newspb.NewsRPC/DeleteNew",
  grpc.web.MethodType.UNARY,
  proto.newspb.DeleteNewRequest,
  proto.newspb.DeleteNewResponse,
  /**
   * @param {!proto.newspb.DeleteNewRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.DeleteNewResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.newspb.DeleteNewRequest,
 *   !proto.newspb.DeleteNewResponse>}
 */
const methodInfo_NewsRPC_DeleteNew = new grpc.web.AbstractClientBase.MethodInfo(
  proto.newspb.DeleteNewResponse,
  /**
   * @param {!proto.newspb.DeleteNewRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.DeleteNewResponse.deserializeBinary
);

/**
 * @param {!proto.newspb.DeleteNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.newspb.DeleteNewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.DeleteNewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCClient.prototype.deleteNew = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/newspb.NewsRPC/DeleteNew",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_DeleteNew,
    callback
  );
};

/**
 * @param {!proto.newspb.DeleteNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.newspb.DeleteNewResponse>}
 *     A native promise that resolves to the response
 */
proto.newspb.NewsRPCPromiseClient.prototype.deleteNew = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/newspb.NewsRPC/DeleteNew",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_DeleteNew
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.newspb.UpdateNewRequest,
 *   !proto.newspb.UpdateNewResponse>}
 */
const methodDescriptor_NewsRPC_UpdateNew = new grpc.web.MethodDescriptor(
  "/newspb.NewsRPC/UpdateNew",
  grpc.web.MethodType.UNARY,
  proto.newspb.UpdateNewRequest,
  proto.newspb.UpdateNewResponse,
  /**
   * @param {!proto.newspb.UpdateNewRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.UpdateNewResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.newspb.UpdateNewRequest,
 *   !proto.newspb.UpdateNewResponse>}
 */
const methodInfo_NewsRPC_UpdateNew = new grpc.web.AbstractClientBase.MethodInfo(
  proto.newspb.UpdateNewResponse,
  /**
   * @param {!proto.newspb.UpdateNewRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.UpdateNewResponse.deserializeBinary
);

/**
 * @param {!proto.newspb.UpdateNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.newspb.UpdateNewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.UpdateNewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCClient.prototype.updateNew = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/newspb.NewsRPC/UpdateNew",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_UpdateNew,
    callback
  );
};

/**
 * @param {!proto.newspb.UpdateNewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.newspb.UpdateNewResponse>}
 *     A native promise that resolves to the response
 */
proto.newspb.NewsRPCPromiseClient.prototype.updateNew = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/newspb.NewsRPC/UpdateNew",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_UpdateNew
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.newspb.GetNewsRequest,
 *   !proto.newspb.GetNewsResponse>}
 */
const methodDescriptor_NewsRPC_GetNews = new grpc.web.MethodDescriptor(
  "/newspb.NewsRPC/GetNews",
  grpc.web.MethodType.SERVER_STREAMING,
  proto.newspb.GetNewsRequest,
  proto.newspb.GetNewsResponse,
  /**
   * @param {!proto.newspb.GetNewsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.GetNewsResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.newspb.GetNewsRequest,
 *   !proto.newspb.GetNewsResponse>}
 */
const methodInfo_NewsRPC_GetNews = new grpc.web.AbstractClientBase.MethodInfo(
  proto.newspb.GetNewsResponse,
  /**
   * @param {!proto.newspb.GetNewsRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.GetNewsResponse.deserializeBinary
);

/**
 * @param {!proto.newspb.GetNewsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.GetNewsResponse>}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCClient.prototype.getNews = function (request, metadata) {
  return this.client_.serverStreaming(
    this.hostname_ + "/newspb.NewsRPC/GetNews",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_GetNews
  );
};

/**
 * @param {!proto.newspb.GetNewsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.GetNewsResponse>}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCPromiseClient.prototype.getNews = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/newspb.NewsRPC/GetNews",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_GetNews
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.newspb.GetNewsByIDRequest,
 *   !proto.newspb.GetNewsByIDResponse>}
 */
const methodDescriptor_NewsRPC_GetNewsByID = new grpc.web.MethodDescriptor(
  "/newspb.NewsRPC/GetNewsByID",
  grpc.web.MethodType.UNARY,
  proto.newspb.GetNewsByIDRequest,
  proto.newspb.GetNewsByIDResponse,
  /**
   * @param {!proto.newspb.GetNewsByIDRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.GetNewsByIDResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.newspb.GetNewsByIDRequest,
 *   !proto.newspb.GetNewsByIDResponse>}
 */
const methodInfo_NewsRPC_GetNewsByID = new grpc.web.AbstractClientBase.MethodInfo(
  proto.newspb.GetNewsByIDResponse,
  /**
   * @param {!proto.newspb.GetNewsByIDRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.GetNewsByIDResponse.deserializeBinary
);

/**
 * @param {!proto.newspb.GetNewsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.newspb.GetNewsByIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.GetNewsByIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCClient.prototype.getNewsByID = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/newspb.NewsRPC/GetNewsByID",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_GetNewsByID,
    callback
  );
};

/**
 * @param {!proto.newspb.GetNewsByIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.newspb.GetNewsByIDResponse>}
 *     A native promise that resolves to the response
 */
proto.newspb.NewsRPCPromiseClient.prototype.getNewsByID = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/newspb.NewsRPC/GetNewsByID",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_GetNewsByID
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.newspb.SearchNewsByPostcodeRequest,
 *   !proto.newspb.SearchNewsByPostcodeResponse>}
 */
const methodDescriptor_NewsRPC_SearchNewsByPostcode = new grpc.web.MethodDescriptor(
  "/newspb.NewsRPC/SearchNewsByPostcode",
  grpc.web.MethodType.SERVER_STREAMING,
  proto.newspb.SearchNewsByPostcodeRequest,
  proto.newspb.SearchNewsByPostcodeResponse,
  /**
   * @param {!proto.newspb.SearchNewsByPostcodeRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.SearchNewsByPostcodeResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.newspb.SearchNewsByPostcodeRequest,
 *   !proto.newspb.SearchNewsByPostcodeResponse>}
 */
const methodInfo_NewsRPC_SearchNewsByPostcode = new grpc.web.AbstractClientBase.MethodInfo(
  proto.newspb.SearchNewsByPostcodeResponse,
  /**
   * @param {!proto.newspb.SearchNewsByPostcodeRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.newspb.SearchNewsByPostcodeResponse.deserializeBinary
);

/**
 * @param {!proto.newspb.SearchNewsByPostcodeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.SearchNewsByPostcodeResponse>}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCClient.prototype.searchNewsByPostcode = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/newspb.NewsRPC/SearchNewsByPostcode",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_SearchNewsByPostcode
  );
};

/**
 * @param {!proto.newspb.SearchNewsByPostcodeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.newspb.SearchNewsByPostcodeResponse>}
 *     The XHR Node Readable Stream
 */
proto.newspb.NewsRPCPromiseClient.prototype.searchNewsByPostcode = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/newspb.NewsRPC/SearchNewsByPostcode",
    request,
    metadata || {},
    methodDescriptor_NewsRPC_SearchNewsByPostcode
  );
};

module.exports = proto.newspb;
