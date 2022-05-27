const { assert } = require("chai");
const { config } = require("hardhat");
const hre = require("hardhat");
const run=hre.run;
const ethers=hre.ethers;
describe("Token", function () {
  it("Should return the new greeting once it's changed", async function () {
    //编译合约
  await run("compile");
     //部署rsv的代币合约
         //拿到测试账户
         //npx hardhat test
         const accounts = await ethers.getSigners();
         const uniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
         const factory = await uniswapV2Factory.deploy(accounts[0].address);
         await factory.deployed();
         console.log("factory deployed to:", factory.address);
         const uniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
         const factory = await uniswapV2Factory.deploy(accounts[0].address);
         await factory.deployed();
         console.log("factory deployed to:", factory.address);
  });
});
