
const hre = require("hardhat");
const run=hre.run;
const ethers=hre.ethers;
async function main() {
  //编译合约
  await run("compile");
    const accounts = await ethers.getSigners();
      //部署rsv的代币合约
         //拿到测试账户
         //先部署工厂合约
         //npx hardhat run scripts/token.js --network rei
       
        //  const uniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
        //  const factory = await uniswapV2Factory.deploy(accounts[0].address);
        //  await factory.deployed();
        //  console.log("factory deployed to:", factory.address);

        //部署路由合约
    const uniswapV2Router02 = await hre.ethers.getContractFactory("UniswapV2Router02");
         const router = await uniswapV2Router02.deploy("0xDAA71Cc7540151088400442Fa2a3feB38380AAe7","0x2545AF3D8b11e295bB7aEdD5826021AB54F71630");
         await router.deployed();
         console.log("router deployed to:", router.address);

    //部署multicall
    // const multicall = await hre.ethers.getContractFactory("Multicall");
    // const mul = await multicall.deploy();
    // await mul.deployed();
    // console.log("mul deployed to:", mul.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
