// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.29.0
// source: tm2/tx.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from '@bufbuild/protobuf/wire';
import Long from 'long';
import { Any } from '../google/protobuf/any';

export const protobufPackage = 'tm2.tx';

export interface Tx {
  /** specific message types */
  messages: Any[];
  /** transaction costs (fee) */
  fee?: TxFee | undefined;
  /** the signatures for the transaction */
  signatures: TxSignature[];
  /** memo attached to the transaction */
  memo: string;
}

export interface TxFee {
  /** gas limit */
  gasWanted: Long;
  /** gas fee details (<value><denomination>) */
  gasFee: string;
}

export interface TxSignature {
  /** public key associated with the signature */
  pubKey?: Any | undefined;
  /** the signature */
  signature: Uint8Array;
}

export interface PubKeySecp256k1 {
  key: Uint8Array;
}

function createBaseTx(): Tx {
  return { messages: [], fee: undefined, signatures: [], memo: '' };
}

export const Tx: MessageFns<Tx> = {
  encode(message: Tx, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.fee !== undefined) {
      TxFee.encode(message.fee, writer.uint32(18).fork()).join();
    }
    for (const v of message.signatures) {
      TxSignature.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.memo !== '') {
      writer.uint32(34).string(message.memo);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Tx {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTx();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.messages.push(Any.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fee = TxFee.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.signatures.push(TxSignature.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.memo = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Tx {
    return {
      messages: globalThis.Array.isArray(object?.messages)
        ? object.messages.map((e: any) => Any.fromJSON(e))
        : [],
      fee: isSet(object.fee) ? TxFee.fromJSON(object.fee) : undefined,
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => TxSignature.fromJSON(e))
        : [],
      memo: isSet(object.memo) ? globalThis.String(object.memo) : '',
    };
  },

  toJSON(message: Tx): unknown {
    const obj: any = {};
    if (message.messages?.length) {
      obj.messages = message.messages.map((e) => Any.toJSON(e));
    }
    if (message.fee !== undefined) {
      obj.fee = TxFee.toJSON(message.fee);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => TxSignature.toJSON(e));
    }
    if (message.memo !== undefined) {
      obj.memo = message.memo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tx>, I>>(base?: I): Tx {
    return Tx.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Tx>, I>>(object: I): Tx {
    const message = createBaseTx();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.fee =
      object.fee !== undefined && object.fee !== null
        ? TxFee.fromPartial(object.fee)
        : undefined;
    message.signatures =
      object.signatures?.map((e) => TxSignature.fromPartial(e)) || [];
    message.memo = object.memo ?? '';
    return message;
  },
};

function createBaseTxFee(): TxFee {
  return { gasWanted: Long.ZERO, gasFee: '' };
}

export const TxFee: MessageFns<TxFee> = {
  encode(
    message: TxFee,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (!message.gasWanted.equals(Long.ZERO)) {
      writer.uint32(8).sint64(message.gasWanted.toString());
    }
    if (message.gasFee !== '') {
      writer.uint32(18).string(message.gasFee);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TxFee {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.gasWanted = Long.fromString(reader.sint64().toString());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gasFee = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxFee {
    return {
      gasWanted: isSet(object.gasWanted)
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO,
      gasFee: isSet(object.gasFee) ? globalThis.String(object.gasFee) : '',
    };
  },

  toJSON(message: TxFee): unknown {
    const obj: any = {};
    if (message.gasWanted !== undefined) {
      obj.gasWanted = (message.gasWanted || Long.ZERO).toString();
    }
    if (message.gasFee !== undefined) {
      obj.gasFee = message.gasFee;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TxFee>, I>>(base?: I): TxFee {
    return TxFee.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TxFee>, I>>(object: I): TxFee {
    const message = createBaseTxFee();
    message.gasWanted =
      object.gasWanted !== undefined && object.gasWanted !== null
        ? Long.fromValue(object.gasWanted)
        : Long.ZERO;
    message.gasFee = object.gasFee ?? '';
    return message;
  },
};

function createBaseTxSignature(): TxSignature {
  return { pubKey: undefined, signature: new Uint8Array(0) };
}

export const TxSignature: MessageFns<TxSignature> = {
  encode(
    message: TxSignature,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(10).fork()).join();
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TxSignature {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxSignature();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.pubKey = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TxSignature {
    return {
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      signature: isSet(object.signature)
        ? bytesFromBase64(object.signature)
        : new Uint8Array(0),
    };
  },

  toJSON(message: TxSignature): unknown {
    const obj: any = {};
    if (message.pubKey !== undefined) {
      obj.pubKey = Any.toJSON(message.pubKey);
    }
    if (message.signature !== undefined) {
      obj.signature = base64FromBytes(message.signature);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TxSignature>, I>>(base?: I): TxSignature {
    return TxSignature.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TxSignature>, I>>(
    object: I
  ): TxSignature {
    const message = createBaseTxSignature();
    message.pubKey =
      object.pubKey !== undefined && object.pubKey !== null
        ? Any.fromPartial(object.pubKey)
        : undefined;
    message.signature = object.signature ?? new Uint8Array(0);
    return message;
  },
};

function createBasePubKeySecp256k1(): PubKeySecp256k1 {
  return { key: new Uint8Array(0) };
}

export const PubKeySecp256k1: MessageFns<PubKeySecp256k1> = {
  encode(
    message: PubKeySecp256k1,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PubKeySecp256k1 {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKeySecp256k1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PubKeySecp256k1 {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
    };
  },

  toJSON(message: PubKeySecp256k1): unknown {
    const obj: any = {};
    if (message.key !== undefined) {
      obj.key = base64FromBytes(message.key);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PubKeySecp256k1>, I>>(
    base?: I
  ): PubKeySecp256k1 {
    return PubKeySecp256k1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PubKeySecp256k1>, I>>(
    object: I
  ): PubKeySecp256k1 {
    const message = createBasePubKeySecp256k1();
    message.key = object.key ?? new Uint8Array(0);
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString('base64');
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(''));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
    ? string | number | Long
    : T extends globalThis.Array<infer U>
      ? globalThis.Array<DeepPartial<U>>
      : T extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : T extends {}
          ? { [K in keyof T]?: DeepPartial<T[K]> }
          : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
