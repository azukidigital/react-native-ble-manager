import { BleState, ConnectOptions, ConnectionPriority, Peripheral, PeripheralInfo, ScanOptions, StartOptions } from './types';
export * from './types';
declare class BleManager {
    constructor();
    /**
     *
     * @param peripheralId
     * @param serviceUUID
     * @param characteristicUUID
     * @returns data as an array of numbers (which can be converted back to a Uint8Array (ByteArray) using something like [Buffer.from()](https://github.com/feross/buffer))
     */
    read(peripheralId: string, serviceUUID: string, characteristicUUID: string): Promise<number[]>;
    /**
     *
     * @param peripheralId
     * @param serviceUUID
     * @param characteristicUUID
     * @param descriptorUUID
     * @returns data as an array of numbers (which can be converted back to a Uint8Array (ByteArray) using something like [Buffer.from()](https://github.com/feross/buffer))
     */
    readDescriptor(peripheralId: string, serviceUUID: string, characteristicUUID: string, descriptorUUID: string): Promise<number[]>;
    /**
     *
     * @param peripheralId
     * @returns a promise resolving with the updated RSSI (`number`) if it succeeds.
     */
    readRSSI(peripheralId: string): Promise<number>;
    /**
     * [Android only]
     * @param peripheralId
     * @returns a promise that resolves to a boolean indicating if gatt was successfully refreshed or not.
     */
    refreshCache(peripheralId: string): Promise<boolean>;
    /**
     *
     * @param peripheralId
     * @param serviceUUIDs [iOS only] optional filter of services to retrieve.
     * @returns
     */
    retrieveServices(peripheralId: string, serviceUUIDs?: string[]): Promise<PeripheralInfo>;
    /**
     *
     * @param peripheralId
     * @param serviceUUID
     * @param characteristicUUID
     * @param data data to write as an array of numbers (which can be converted from a Uint8Array (ByteArray) using something like [Buffer.toJSON().data](https://github.com/feross/buffer))
     * @param maxByteSize optional, defaults to 20
     * @returns
     */
    write(peripheralId: string, serviceUUID: string, characteristicUUID: string, data: number[], maxByteSize?: number): Promise<void>;
    /**
     *
     * @param peripheralId
     * @param serviceUUID
     * @param characteristicUUID
     * @param data data to write as an array of numbers (which can be converted from a Uint8Array (ByteArray) using something like [Buffer.toJSON().data](https://github.com/feross/buffer))
     * @param maxByteSize optional, defaults to 20
     * @param queueSleepTime optional, defaults to 10. Only useful if data length is greater than maxByteSize.
     * @returns
     */
    writeWithoutResponse(peripheralId: string, serviceUUID: string, characteristicUUID: string, data: number[], maxByteSize?: number, queueSleepTime?: number): Promise<void>;
    connect(peripheralId: string, options?: ConnectOptions): Promise<void>;
    /**
     * [Android only]
     * @param peripheralId
     * @param peripheralPin optional. will be used to auto-bond if possible.
     * @returns
     */
    createBond(peripheralId: string, peripheralPin?: string | null): Promise<void>;
    /**
     * [Android only]
     * @param peripheralId
     * @returns
     */
    removeBond(peripheralId: string): Promise<void>;
    /**
     *
     * @param peripheralId
     * @param force [Android only] defaults to true.
     * @returns
     */
    disconnect(peripheralId: string, force?: boolean): Promise<void>;
    startNotification(peripheralId: string, serviceUUID: string, characteristicUUID: string): Promise<void>;
    /**
     * [Android only]
     * @param peripheralId
     * @param serviceUUID
     * @param characteristicUUID
     * @param buffer
     * @returns
     */
    startNotificationUseBuffer(peripheralId: string, serviceUUID: string, characteristicUUID: string, buffer: number): Promise<void>;
    stopNotification(peripheralId: string, serviceUUID: string, characteristicUUID: string): Promise<void>;
    checkState(): Promise<BleState>;
    start(options?: StartOptions): Promise<void>;
    /**
     *
     * @param serviceUUIDs
     * @param seconds amount of seconds to scan. if set to 0 or less, will scan until you call stopScan() or the OS stops the scan (background etc).
     * @param allowDuplicates [iOS only]
     * @param scanningOptions [Android only] optional map of properties to fine-tune scan behavior on android, see README.
     * @returns
     */
    scan(serviceUUIDs: string[], seconds: number, allowDuplicates?: boolean, scanningOptions?: ScanOptions): Promise<void>;
    stopScan(): Promise<void>;
    /**
     * [Android only] triggers an ENABLE_REQUEST intent to the end-user to enable bluetooth.
     * @returns
     */
    enableBluetooth(): Promise<void>;
    /**
     *
     * @param serviceUUIDs [optional] not used on android, optional on ios.
     * @returns
     */
    getConnectedPeripherals(serviceUUIDs?: string[]): Promise<Peripheral[]>;
    /**
     * [Android only]
     * @returns
     */
    getBondedPeripherals(): Promise<Peripheral[]>;
    getDiscoveredPeripherals(): Promise<Peripheral[]>;
    /**
     * [Android only]
     * @param peripheralId
     * @returns
     */
    removePeripheral(peripheralId: string): Promise<void>;
    /**
     * @param peripheralId
     * @param serviceUUIDs [optional] not used on android, optional on ios.
     * @returns
     */
    isPeripheralConnected(peripheralId: string, serviceUUIDs?: string[]): Promise<boolean>;
    /**
     * [Android only, API 21+]
     * @param peripheralId
     * @param connectionPriority
     * @returns a promise that resolves with a boolean indicating of the connection priority was changed successfully, or rejects with an error message.
     */
    requestConnectionPriority(peripheralId: string, connectionPriority: ConnectionPriority): Promise<boolean>;
    /**
     * [Android only, API 21+]
     * @param peripheralId
     * @param mtu size to be requested, in bytes.
     * @returns a promise resolving with the negotiated MTU if it succeeded. Beware that it might not be the one requested due to device's BLE limitations on both side of the negotiation.
     */
    requestMTU(peripheralId: string, mtu: number): Promise<number>;
    /**
     * [Android only]
     * @param name
     */
    setName(name: string): void;
    /**
     * [iOS only]
     * @param peripheralId
     * @returns
     */
    getMaximumWriteValueLengthForWithoutResponse(peripheralId: string): Promise<number>;
    /**
     * [iOS only]
     * @param peripheralId
     * @returns
     */
    getMaximumWriteValueLengthForWithResponse(peripheralId: string): Promise<number>;
}
declare const _default: BleManager;
export default _default;
