class scratchplus {
  getInfo() {
    return {
      id: 'scratchplus',
      name: "ScratchPLUS",
      color1: '#FF8C1A',
      color2: '#DB6E00',
      blocks: [
        {
          opcode: 'true',
          blockType: Scratch.BlockType.REPORTER,
          text: 'true'
        }
      ]
    };
  }
  true() {
    return 'true';
  }
}
Scratch.extensions.register(new MyExtension());
