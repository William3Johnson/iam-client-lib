export const selectResults = {
  errors: [],
  matches: [
    {
      name: 'Descriptor name',
      rule: 'all',
      vc_path: ['$.verifiableCredential[0]'],
    },
  ],
  areRequiredCredentialsPresent: 'info',
  verifiableCredential: [
    {
      '@context': ['https://www.w3.org/2018/credentials/v1'],
      id: 'urn:uuid:70d2bd56-b35e-47d0-9308-8522d684a391',
      type: ['VerifiableCredential', 'EWFRole'],
      credentialSubject: {
        id: 'did:ethr:0x0539:0x3bd5371e3be9e0629289b421ef03fd2a8f07365a',
        role: { namespace: 'test.iam.ewc', version: '1' },
        issuerFields: [],
      },
      issuer: 'did:ethr:0x0539:0x3bd5371e3be9e0629289b421ef03fd2a8f07365a',
      issuanceDate: '2022-06-13T08:53:26.677Z',
      proof: {
        '@context': 'https://w3id.org/security/suites/eip712sig-2021/v1',
        type: 'EthereumEip712Signature2021',
        proofPurpose: 'assertionMethod',
        proofValue:
          '0x1f56fe4143adf1ef78d9f401e398bc8b97a27146f52ece5054013124c7a6ab5003ffeea82f32dda33820473368caac920052eb4222fcf207ab43ce59c42c82f31c',
        verificationMethod:
          'did:ethr:0x0539:0x3bd5371e3be9e0629289b421ef03fd2a8f07365a#controller',
        created: '2022-06-13T08:53:26.700Z',
        eip712Domain: {
          domain: {},
          messageSchema: {
            CredentialSubject: [
              { name: 'id', type: 'string' },
              { name: 'role', type: 'EWFRole' },
              { name: 'issuerFields', type: 'IssuerFields[]' },
            ],
            EIP712Domain: [],
            EWFRole: [
              { name: 'namespace', type: 'string' },
              { name: 'version', type: 'string' },
            ],
            IssuerFields: [
              { name: 'key', type: 'string' },
              { name: 'value', type: 'string' },
            ],
            Proof: [
              { name: '@context', type: 'string' },
              { name: 'verificationMethod', type: 'string' },
              { name: 'created', type: 'string' },
              { name: 'proofPurpose', type: 'string' },
              { name: 'type', type: 'string' },
            ],
            StatusList2021Entry: [
              { name: 'id', type: 'string' },
              { name: 'type', type: 'string' },
              { name: 'statusPurpose', type: 'string' },
              { name: 'statusListIndex', type: 'string' },
              { name: 'statusListCredential', type: 'string' },
            ],
            VerifiableCredential: [
              { name: '@context', type: 'string[]' },
              { name: 'id', type: 'string' },
              { name: 'type', type: 'string[]' },
              { name: 'issuer', type: 'string' },
              { name: 'issuanceDate', type: 'string' },
              { name: 'credentialSubject', type: 'CredentialSubject' },
              { name: 'proof', type: 'Proof' },
              { name: 'credentialStatus', type: 'StatusList2021Entry' },
            ],
          },
          primaryType: 'VerifiableCredential',
        },
      },
      credentialStatus: {
        id: 'https://energyweb.org/credential/0x007033ded501bfe5ef990b64228bdbee84b5a3a80f2a7eb9dcb417a28eb273eb#list',
        type: 'StatusList2021Entry',
        statusPurpose: 'revocation',
        statusListCredential:
          'https://identitycache.org/v1/status-list/urn:uuid:70d2bd56-b35e-47d0-9308-8522d684a391',
        statusListIndex: '1',
      },
    },
  ],
  warnings: [],
};
