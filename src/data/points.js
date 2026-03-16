const points = [
  {
    'id': '0f464d25-69df-4d8f-bad5-b00e0eb301b0',
    'basePrice': 1435,
    'dateFrom': '2026-02-17T06:48:05.413Z',
    'dateTo': '2026-02-18T06:59:05.413Z',
    'destination': '1d2208dc-6cf9-4d17-a6ec-9f75fc8ff66e',
    'isFavorite': false,
    'offers': [
      'ec8ca792-a6fd-4f78-952e-e742418048ee',
      '92ae6317-7953-47d7-b8ad-5c6c9194bc48',
      '5105bc81-3a4e-4b4d-9ffb-076729f0ce51',
      '1d54461e-adb0-46c9-9393-0016c70f82e5'
    ],
    'type': 'taxi'
  },
  {
    'id': '668526d7-dcee-4a5e-bb2d-aa6d84cccfc1',
    'basePrice': 826,
    'dateFrom': '2026-02-20T06:41:05.413Z',
    'dateTo': '2026-02-22T02:33:05.413Z',
    'destination': '9c1202ba-f8bc-4d7b-a02f-00fa6663386a',
    'isFavorite': false,
    'offers': [
      '93e06797-bfd4-46fc-af68-1e6e4131e750',
      '9b74c079-fd72-4cc0-b67d-e2d000a9c023'
    ],
    'type': 'train'
  },
  {
    'id': '510ef829-b66c-4b47-aa23-c997d0e50774',
    'basePrice': 3385,
    'dateFrom': '2026-02-23T09:52:05.413Z',
    'dateTo': '2026-02-25T06:25:05.413Z',
    'destination': '9c1202ba-f8bc-4d7b-a02f-00fa6663386a',
    'isFavorite': false,
    'offers': [
      '22837032-b5df-413a-9f8d-296053ae4689',
      '93e06797-bfd4-46fc-af68-1e6e4131e750',
      '9b74c079-fd72-4cc0-b67d-e2d000a9c023'
    ],
    'type': 'train'
  },
  {
    'id': 'a8aeb996-5725-4909-83d0-f5dc65af84c6',
    'basePrice': 3795,
    'dateFrom': '2026-02-27T07:07:05.413Z',
    'dateTo': '2026-02-27T20:16:05.413Z',
    'destination': '9c1202ba-f8bc-4d7b-a02f-00fa6663386a',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '8b3ec85b-4952-4326-b967-94315a1108cc',
    'basePrice': 4043,
    'dateFrom': '2026-03-01T08:39:05.413Z',
    'dateTo': '2026-03-03T02:19:05.413Z',
    'destination': '7ce740d6-e29e-4661-914e-fe1e567c8f72',
    'isFavorite': false,
    'offers': [
      'd9f79c81-830c-4a5d-bab2-341cbda2e77a'
    ],
    'type': 'ship'
  },
  {
    'id': '1a577b1c-31e5-4c56-bf05-3d09e70ee529',
    'basePrice': 7591,
    'dateFrom': '2026-03-03T21:40:05.413Z',
    'dateTo': '2026-03-05T16:02:05.413Z',
    'destination': '798e93ec-bf00-410c-ae2d-d81ed08607d4',
    'isFavorite': false,
    'offers': [
      '002b14f3-0211-4754-9574-0d2db0187395'
    ],
    'type': 'restaurant'
  },
  {
    'id': '5fa8cea0-1d20-442c-ac55-3ca83d46a29a',
    'basePrice': 7198,
    'dateFrom': '2026-03-06T16:36:05.413Z',
    'dateTo': '2026-03-08T09:14:05.413Z',
    'destination': 'f7f256fd-fda5-4466-a869-751d93d26584',
    'isFavorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': 'f1cff754-6b7e-4096-a416-10f96b763900',
    'basePrice': 9922,
    'dateFrom': '2026-03-10T04:51:05.413Z',
    'dateTo': '2026-03-11T05:58:05.413Z',
    'destination': '0909f926-6596-4f05-9635-2b8b46944e68',
    'isFavorite': false,
    'offers': [
      'ea125bba-3568-4166-a58c-5a796ef437bd'
    ],
    'type': 'flight'
  },
  {
    'id': 'cbaad414-9313-4c20-9764-e2611a8cc273',
    'basePrice': 1410,
    'dateFrom': '2026-03-13T05:15:05.413Z',
    'dateTo': '2026-03-14T03:46:05.413Z',
    'destination': '9c1202ba-f8bc-4d7b-a02f-00fa6663386a',
    'isFavorite': false,
    'offers': [
      '14b4f79f-9275-4bc8-a6cd-9ea3a71607df'
    ],
    'type': 'drive'
  },
  {
    'id': '1670c1cd-518f-40ea-b2ac-a9715a5a36a4',
    'basePrice': 3478,
    'dateFrom': '2026-03-15T09:01:05.413Z',
    'dateTo': '2026-03-16T04:11:05.413Z',
    'destination': 'b4396919-fb0f-4e36-9adf-96f356ceb823',
    'isFavorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '245c96f7-08f0-464f-9773-222c0f419d58',
    'basePrice': 2232,
    'dateFrom': '2026-03-17T16:04:05.413Z',
    'dateTo': '2026-03-19T03:32:05.413Z',
    'destination': '7ce740d6-e29e-4661-914e-fe1e567c8f72',
    'isFavorite': false,
    'offers': [
      '22837032-b5df-413a-9f8d-296053ae4689',
      '93e06797-bfd4-46fc-af68-1e6e4131e750',
      '9b74c079-fd72-4cc0-b67d-e2d000a9c023'
    ],
    'type': 'train'
  },
  {
    'id': '4ae49a87-7a2e-4df1-92af-91689f12cc45',
    'basePrice': 4714,
    'dateFrom': '2026-03-20T02:19:05.413Z',
    'dateTo': '2026-03-20T10:00:05.413Z',
    'destination': '1d2208dc-6cf9-4d17-a6ec-9f75fc8ff66e',
    'isFavorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': 'f0215ad1-68b0-4200-8660-4de896ce872d',
    'basePrice': 8377,
    'dateFrom': '2026-03-20T18:01:05.413Z',
    'dateTo': '2026-03-21T23:23:05.413Z',
    'destination': '7ce740d6-e29e-4661-914e-fe1e567c8f72',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'e47e6ee8-d9b2-4db3-8981-5dd921e3e1c4',
    'basePrice': 7457,
    'dateFrom': '2026-03-23T02:25:05.413Z',
    'dateTo': '2026-03-24T02:52:05.413Z',
    'destination': '1d2208dc-6cf9-4d17-a6ec-9f75fc8ff66e',
    'isFavorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '960bc4b9-30a6-4195-8f69-921dfa571a92',
    'basePrice': 7223,
    'dateFrom': '2026-03-25T04:41:05.413Z',
    'dateTo': '2026-03-26T08:40:05.413Z',
    'destination': '0909f926-6596-4f05-9635-2b8b46944e68',
    'isFavorite': false,
    'offers': [
      'ec8ca792-a6fd-4f78-952e-e742418048ee',
      '92ae6317-7953-47d7-b8ad-5c6c9194bc48',
      '5105bc81-3a4e-4b4d-9ffb-076729f0ce51',
      '1d54461e-adb0-46c9-9393-0016c70f82e5'
    ],
    'type': 'taxi'
  },
  {
    'id': 'bfce8367-05dd-4769-a025-38eedba381fa',
    'basePrice': 4634,
    'dateFrom': '2026-03-28T04:52:05.413Z',
    'dateTo': '2026-03-29T23:50:05.413Z',
    'destination': '9c1202ba-f8bc-4d7b-a02f-00fa6663386a',
    'isFavorite': false,
    'offers': [
      '14b4f79f-9275-4bc8-a6cd-9ea3a71607df'
    ],
    'type': 'drive'
  },
  {
    'id': 'ad375f2c-62af-49cb-bbd7-ba7069766a17',
    'basePrice': 5820,
    'dateFrom': '2026-03-31T14:25:05.413Z',
    'dateTo': '2026-04-01T16:38:05.413Z',
    'destination': '9589f971-96da-4cb8-b703-64077e94c727',
    'isFavorite': false,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': 'c346a9a3-68eb-4dc1-8e14-0fb1fdc45f1a',
    'basePrice': 5786,
    'dateFrom': '2026-04-03T17:07:05.413Z',
    'dateTo': '2026-04-05T09:20:05.413Z',
    'destination': '9589f971-96da-4cb8-b703-64077e94c727',
    'isFavorite': false,
    'offers': [
      '14b4f79f-9275-4bc8-a6cd-9ea3a71607df'
    ],
    'type': 'drive'
  },
  {
    'id': 'eeaee132-1d9d-4592-939c-dd22543a2702',
    'basePrice': 2227,
    'dateFrom': '2026-04-06T05:34:05.413Z',
    'dateTo': '2026-04-06T13:06:05.413Z',
    'destination': '9c1202ba-f8bc-4d7b-a02f-00fa6663386a',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '8dafd310-d0ee-4ec3-a788-118e4101fa74',
    'basePrice': 1806,
    'dateFrom': '2026-04-07T14:44:05.413Z',
    'dateTo': '2026-04-08T16:46:05.413Z',
    'destination': 'a2361ba2-1d5d-4ff4-b641-ba45bb7aa763',
    'isFavorite': true,
    'offers': [
      '6fea7c00-7f2a-4769-85b2-e649fb761d34',
      'a6c9d62b-c686-43e1-9815-517c9661d952',
      'c3ef7724-400f-43b8-8f24-457909ee8be9',
      'aa43e68a-4ee3-4941-8a62-f25af083f784'
    ],
    'type': 'check-in'
  },
  {
    'id': 'd798ee56-4a1a-41e4-8e05-63cda2184d18',
    'basePrice': 6993,
    'dateFrom': '2026-04-09T04:34:05.413Z',
    'dateTo': '2026-04-10T12:08:05.413Z',
    'destination': '7ce740d6-e29e-4661-914e-fe1e567c8f72',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 'fad132b7-ea6f-458a-8f9e-c9d1c19446ff',
    'basePrice': 3550,
    'dateFrom': '2026-04-11T13:49:05.413Z',
    'dateTo': '2026-04-12T09:31:05.413Z',
    'destination': '798e93ec-bf00-410c-ae2d-d81ed08607d4',
    'isFavorite': false,
    'offers': [
      'a399ea56-e121-4ce9-b1d7-9bc8dce1c6bb',
      '002b14f3-0211-4754-9574-0d2db0187395'
    ],
    'type': 'restaurant'
  },
  {
    'id': '6ac5f06c-e4f2-4bd4-83c3-169a103f0a6b',
    'basePrice': 4990,
    'dateFrom': '2026-04-13T05:39:05.413Z',
    'dateTo': '2026-04-13T14:00:05.413Z',
    'destination': '7ce740d6-e29e-4661-914e-fe1e567c8f72',
    'isFavorite': false,
    'offers': [
      '8cce1fef-6068-44d9-8891-846addd641de',
      '14b4f79f-9275-4bc8-a6cd-9ea3a71607df'
    ],
    'type': 'drive'
  },
  {
    'id': '0c83f4f2-e7f2-483c-97c5-6d7c21416507',
    'basePrice': 5741,
    'dateFrom': '2026-04-15T08:19:05.413Z',
    'dateTo': '2026-04-16T20:40:05.413Z',
    'destination': '7ce740d6-e29e-4661-914e-fe1e567c8f72',
    'isFavorite': false,
    'offers': [
      'ca2c8e34-3832-4178-97ca-933a1040732d',
      '3160f01b-1478-4d8a-8ec4-2d11b22ebdfb',
      'd2eb1f89-aa5b-4d51-80a1-76c1c57eb7d2'
    ],
    'type': 'bus'
  },
  {
    'id': 'dac707a8-277f-4411-865b-2b16aedb71d6',
    'basePrice': 2442,
    'dateFrom': '2026-04-18T14:00:05.413Z',
    'dateTo': '2026-04-19T02:23:05.413Z',
    'destination': 'b58209c2-e04c-46b5-8057-55a0d72974da',
    'isFavorite': true,
    'offers': [
      '14b4f79f-9275-4bc8-a6cd-9ea3a71607df'
    ],
    'type': 'drive'
  }
];

export {points};
