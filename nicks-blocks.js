const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABuCAYAAAAkhz2CAAAAAXNSR0IArs4c6QAABTZJREFUeF7tnGl22zAMhOVbNBdrzthcrL1F+pRYjkxTwjIAuAj92ccFnI8DQpTi25L/cAX+fP49HOT99oZOcEMHmKr/mdhWC1VAmxtShOhaeAJYc0LqGU4JlQFrHkgjgRGCmgPSyID2wA5cNTakWeAQoHBIXkJRudprXm0hYNmvWLsOUrRAJbDo+S0BcMfarVkGqbU4a+CtY+CKjLYTQ7qKMKiw1v3voGgnJSBr6WXjvd/eziElIJmgHq1PISUgD8lVY9adlIBUYnp1eoWUgLy0Vo/7DCkBvQj5+Xv5pVZ3WZbbx/IP6b/2/YE0OSBUbERoFNQlILUEtMFFQH1DmtRFPcBJSEQOSkhIkg7oOwug78LBMNWhwiB5u+SOxmK1jyzWZAbJShSLRW0CW8UkBWa5BjMneYhhuVBOfOV8Z30sY+NsANhJHAE4gdTaRIuxjyEhMaklpGVZvm7BwcLB00lf+djgWoW5J56adeMkC0jryjxBXRrS480s6CRvSK3c1IWTnl6fG4CqwTpygcZ50Y5qDunlQxQjSJLcLwV1KUjV7+4GgBSd9po5qfJRaLNXFVInTQ/p5IvdoSBFggp1EvFJ9XCQokCFQaK+eX96fR788k+T7ixeoHGLG3dIDDiP9b4EHVREIJAi3OQGSQAnIRGW6htSUNpDneTtJjdIa+BCNx1/C+6c9hIS93Tcf3d31McJlgUkTzeN4aQ9NAdQFKT1Gohqk5BKZxmDogBsd3VUOy9Q4znJARglvgSSB6jxIW3QAHdxIXHfV1nfkickxtvcvegUUI+biIR0V1UiRDQoSWz8Yvre0uw5iTMzkO6oNFZLX5GgEpLCSdue4YCyOJ/mgQReIWmESEicFGdYjmsgUWnSqojQxsaSMPRMauAkLiT02SkhAWdS1NmUkAwgcR2lLSISkhEkT1AJKSGJfiuc/pUuqlwBHmitdqtHWU6NqU2jX3Jeobor9w0lqKbSo8ZMSIq/S6JElYKixktICkjWRURCMiwcpKmP64CE1BASN+3NAwmo7Kj0xN3xteKTEpgDihoDic+/ugPB7EW1KsGlKY8DyXMT+UEyhMO5f4N2KuP1PAeU1ybygeQAyHWnXg6SEyBvSNT4m5vPHDuGkxwBUSKi6Y4afw5IzoAoES0gUXNQoPp2UgAgSkArSNQ8R6D6LsGDAFHiJaSfB4umP97ulk4qT7iUM8qSnGoPbSLoVUWgiyKdRM1VS3l9QgoGRAkH7dTaXZHw2Skh3UWMTHfUpijdlJAaQZKA6g9SZ6lun624H+5z0yMl/kGmfPlv7nzV8VSFgxEkKwG4QtXaccSziJMzz+E6WkGyWDgCh3JfOTYa73CQ0AVbwaGuefbzoDEnJJAaV0AEFHeObs4kZLEgD/hA18aekJTkNMIlJKXYZbdS/E1YDZRaSBpQ0NyjVXfQYo02AfchV1pBdleCbwEd7cpeYBwJJ3UTtB6Vk9bIjR5oDTd3+FASUAkpHM/3hAmpkfDSabmg2jgpU96DJwUKArTOoj6TEtIgkBIUCQp2EeykhHQKqQWgNaD6HzZnOS6tN/jthefRMaR0FF90aUtTSNvk6SophuP2CkDnTtpPlaBsQLlCGjH9rYL0tLmUgPhOGsVVpRC9QAIA6SB5nlXgYqo5qQdQ4Lrw3xbSQAODFh8QLUEZrNUOkli5wA4JKVBsZKoWoAxchJ1JiGCt+kaCMgJ0PUhRjxKGgK4JSVPocJ1vDGeb9hqFw5nIVinQCdC1nVSC08ByBLMPL5105LIatCAoZUj/ATtVe99T3Mt5AAAAAElFTkSuQmCC";

class nicksblocks {
  getInfo() {
    return {
      // `id` is the internal ID of the extension
      // It should never change!
      // If you choose to make an actual extension, please change this to something else.
      // Only the characters a-z and 0-9 can be used. No spaces or special characters.
      id: 'nicksblocks',

      // `name` is what the user sees in the toolbox
      // It can be changed without breaking projects.
      name: 'Nick's Blocks',
      menuIconURI: img,
      
      blocks: [
        {
          // `opcode` is the internal ID of the block
          // It should never change!
          // It corresponds to the class method with the same name.
          opcode: 'true',
          blockType: Scratch.BlockType.REPORTER,
          text: 'true'
        }
      ]
    };
  }

  /**
   * Corresponds to `opcode: 'hello'` above
   */
  hello() {
    // You can just return a value: any string, boolean, or number will work.
    // If you have to perform an asynchronous action like a request, just return a Promise.
    // The block will wait until the Promise resolves and return the resolved value.
    return 'true';
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());
