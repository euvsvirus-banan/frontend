/**
 * @fileoverview gRPC-Web generated client stub for userspb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */

const grpc = {};
grpc.web = require("grpc-web");

const proto = {};
proto.userspb = require("./service_pb.js");

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.userspb.UsersRPCClient = function (hostname, credentials, options) {
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
proto.userspb.UsersRPCPromiseClient = function (
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
 *   !proto.userspb.GetVersionRequest,
 *   !proto.userspb.GetVersionResponse>}
 */
const methodDescriptor_UsersRPC_GetVersion = new grpc.web.MethodDescriptor(
  "/userspb.UsersRPC/GetVersion",
  grpc.web.MethodType.UNARY,
  proto.userspb.GetVersionRequest,
  proto.userspb.GetVersionResponse,
  /**
   * @param {!proto.userspb.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.GetVersionResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userspb.GetVersionRequest,
 *   !proto.userspb.GetVersionResponse>}
 */
const methodInfo_UsersRPC_GetVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userspb.GetVersionResponse,
  /**
   * @param {!proto.userspb.GetVersionRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.GetVersionResponse.deserializeBinary
);

/**
 * @param {!proto.userspb.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userspb.GetVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userspb.GetVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userspb.UsersRPCClient.prototype.getVersion = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/userspb.UsersRPC/GetVersion",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_GetVersion,
    callback
  );
};

/**
 * @param {!proto.userspb.GetVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userspb.GetVersionResponse>}
 *     A native promise that resolves to the response
 */
proto.userspb.UsersRPCPromiseClient.prototype.getVersion = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/userspb.UsersRPC/GetVersion",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_GetVersion
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userspb.AddUserRequest,
 *   !proto.userspb.AddUserResponse>}
 */
const methodDescriptor_UsersRPC_AddUser = new grpc.web.MethodDescriptor(
  "/userspb.UsersRPC/AddUser",
  grpc.web.MethodType.UNARY,
  proto.userspb.AddUserRequest,
  proto.userspb.AddUserResponse,
  /**
   * @param {!proto.userspb.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.AddUserResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userspb.AddUserRequest,
 *   !proto.userspb.AddUserResponse>}
 */
const methodInfo_UsersRPC_AddUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userspb.AddUserResponse,
  /**
   * @param {!proto.userspb.AddUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.AddUserResponse.deserializeBinary
);

/**
 * @param {!proto.userspb.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userspb.AddUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userspb.AddUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userspb.UsersRPCClient.prototype.addUser = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/userspb.UsersRPC/AddUser",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_AddUser,
    callback
  );
};

/**
 * @param {!proto.userspb.AddUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userspb.AddUserResponse>}
 *     A native promise that resolves to the response
 */
proto.userspb.UsersRPCPromiseClient.prototype.addUser = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/userspb.UsersRPC/AddUser",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_AddUser
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userspb.DeleteUserRequest,
 *   !proto.userspb.DeleteUserResponse>}
 */
const methodDescriptor_UsersRPC_DeleteUser = new grpc.web.MethodDescriptor(
  "/userspb.UsersRPC/DeleteUser",
  grpc.web.MethodType.UNARY,
  proto.userspb.DeleteUserRequest,
  proto.userspb.DeleteUserResponse,
  /**
   * @param {!proto.userspb.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.DeleteUserResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userspb.DeleteUserRequest,
 *   !proto.userspb.DeleteUserResponse>}
 */
const methodInfo_UsersRPC_DeleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userspb.DeleteUserResponse,
  /**
   * @param {!proto.userspb.DeleteUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.DeleteUserResponse.deserializeBinary
);

/**
 * @param {!proto.userspb.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userspb.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userspb.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userspb.UsersRPCClient.prototype.deleteUser = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/userspb.UsersRPC/DeleteUser",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_DeleteUser,
    callback
  );
};

/**
 * @param {!proto.userspb.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userspb.DeleteUserResponse>}
 *     A native promise that resolves to the response
 */
proto.userspb.UsersRPCPromiseClient.prototype.deleteUser = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/userspb.UsersRPC/DeleteUser",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_DeleteUser
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userspb.UpdateUserRequest,
 *   !proto.userspb.UpdateUserResponse>}
 */
const methodDescriptor_UsersRPC_UpdateUser = new grpc.web.MethodDescriptor(
  "/userspb.UsersRPC/UpdateUser",
  grpc.web.MethodType.UNARY,
  proto.userspb.UpdateUserRequest,
  proto.userspb.UpdateUserResponse,
  /**
   * @param {!proto.userspb.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.UpdateUserResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userspb.UpdateUserRequest,
 *   !proto.userspb.UpdateUserResponse>}
 */
const methodInfo_UsersRPC_UpdateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userspb.UpdateUserResponse,
  /**
   * @param {!proto.userspb.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.UpdateUserResponse.deserializeBinary
);

/**
 * @param {!proto.userspb.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userspb.UpdateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userspb.UpdateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userspb.UsersRPCClient.prototype.updateUser = function (
  request,
  metadata,
  callback
) {
  return this.client_.rpcCall(
    this.hostname_ + "/userspb.UsersRPC/UpdateUser",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_UpdateUser,
    callback
  );
};

/**
 * @param {!proto.userspb.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userspb.UpdateUserResponse>}
 *     A native promise that resolves to the response
 */
proto.userspb.UsersRPCPromiseClient.prototype.updateUser = function (
  request,
  metadata
) {
  return this.client_.unaryCall(
    this.hostname_ + "/userspb.UsersRPC/UpdateUser",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_UpdateUser
  );
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.userspb.GetUsersRequest,
 *   !proto.userspb.GetUsersResponse>}
 */
const methodDescriptor_UsersRPC_GetUsers = new grpc.web.MethodDescriptor(
  "/userspb.UsersRPC/GetUsers",
  grpc.web.MethodType.SERVER_STREAMING,
  proto.userspb.GetUsersRequest,
  proto.userspb.GetUsersResponse,
  /**
   * @param {!proto.userspb.GetUsersRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.GetUsersResponse.deserializeBinary
);

/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userspb.GetUsersRequest,
 *   !proto.userspb.GetUsersResponse>}
 */
const methodInfo_UsersRPC_GetUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userspb.GetUsersResponse,
  /**
   * @param {!proto.userspb.GetUsersRequest} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.userspb.GetUsersResponse.deserializeBinary
);

/**
 * @param {!proto.userspb.GetUsersRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.userspb.GetUsersResponse>}
 *     The XHR Node Readable Stream
 */
proto.userspb.UsersRPCClient.prototype.getUsers = function (request, metadata) {
  return this.client_.serverStreaming(
    this.hostname_ + "/userspb.UsersRPC/GetUsers",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_GetUsers
  );
};

/**
 * @param {!proto.userspb.GetUsersRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.userspb.GetUsersResponse>}
 *     The XHR Node Readable Stream
 */
proto.userspb.UsersRPCPromiseClient.prototype.getUsers = function (
  request,
  metadata
) {
  return this.client_.serverStreaming(
    this.hostname_ + "/userspb.UsersRPC/GetUsers",
    request,
    metadata || {},
    methodDescriptor_UsersRPC_GetUsers
  );
};

module.exports = proto.userspb;
