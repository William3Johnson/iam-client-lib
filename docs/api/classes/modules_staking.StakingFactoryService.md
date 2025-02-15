# Class: StakingFactoryService

[modules/staking](../modules/modules_staking.md).StakingFactoryService

Intended for staking pool

## Table of contents

### Constructors

- [constructor](modules_staking.StakingFactoryService.md#constructor)

### Methods

- [allServices](modules_staking.StakingFactoryService.md#allservices)
- [getPool](modules_staking.StakingFactoryService.md#getpool)
- [create](modules_staking.StakingFactoryService.md#create)

## Constructors

### constructor

• **new StakingFactoryService**(`_signerService`, `_domainsService`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_signerService` | [`SignerService`](modules_signer.SignerService.md) |
| `_domainsService` | [`DomainsService`](modules_domains.DomainsService.md) |

## Methods

### allServices

▸ **allServices**(): `Promise`<[`Service`](../modules/modules_staking.md#service)[]\>

**`Description`**

Returns all services for which pools are launched

#### Returns

`Promise`<[`Service`](../modules/modules_staking.md#service)[]\>

___

### getPool

▸ **getPool**(): `Promise`<[`StakingPoolService`](modules_staking.StakingPoolService.md)\>

**`Description`**

Returns pool launched for energyweb org

#### Returns

`Promise`<[`StakingPoolService`](modules_staking.StakingPoolService.md)\>

___

### create

▸ `Static` **create**(`signerService`, `domainsService`): `Promise`<[`StakingFactoryService`](modules_staking.StakingFactoryService.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerService` | [`SignerService`](modules_signer.SignerService.md) |
| `domainsService` | [`DomainsService`](modules_domains.DomainsService.md) |

#### Returns

`Promise`<[`StakingFactoryService`](modules_staking.StakingFactoryService.md)\>
