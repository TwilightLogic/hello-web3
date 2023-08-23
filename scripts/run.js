const { ethers } = require("hardhat")

const main = async () => {
  //   hre 在环境中直接载入`await hre.ethers.getContractFactory("Counter")`
  const Counter = await ethers.getContractFactory("Counter")
  const counter = await Counter.deploy()
  //   await counter.deployed()
  await counter.waitForDeployment()

  console.log(`Contact deployed at ${await counter.getAddress()}`)

  //   开始执行合约
  let counts = await counter.getCounts()
  console.log(`Current counts (1): ${counts}`)

  await counter.add()
  counts = await counter.getCounts()
  console.log(`Current counts (2): ${counts}`)

  await counter.add()
  counts = await counter.getCounts()
  console.log(`Current counts (3): ${counts}`)
}

main()
  .then(() => {
    console.log("success!")
    process.exit(0)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
