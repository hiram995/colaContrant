require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "kovan",
  networks: {
    hardhat: {
    },
    rei: {
      url: "https://rpc.rei.network",
      accounts: ["cc9693641b8de1aa54f7c606bbb92e2b7cb35c3cff721d7dbda8731cb56f6ca1"]
    }
  },
  solidity: {
    compilers: [
       {
          version: '0.5.12',
          settings: {
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
       {
          version: '0.5.16',
          settings: {
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
       {
          version: '0.6.6',
          settings: {
             optimizer: {
                enabled: true,
                runs: 200,
             },
          },
       },
       {
         version: '0.4.18',
         settings: {
            optimizer: {
               enabled: true,
               runs: 200,
            },
         },
      },
    ],
 }
};
