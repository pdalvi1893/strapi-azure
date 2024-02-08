module.exports = {
  entities: [
    {
      name: "api::test.test",
      fields: ["TitleTT"],
      components: [
        {
          name: "TestComponentFour",
          fields: ["title"],
        },
      ],
      dynamicZones: [
        {
          name: "NewDynamicZoneOne",
          components: [
            {
              name: "new-component-one.new-component-one",
              fields: ["title"],
            },
          ],
        },
      ],
    },
  ],
};
