export const markdownResources = [
    // {
    //   uri: "welcome/welcome-to-multiversx",
    //   name: "welcome-to-multiversx.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "If you are brand new to blockchain and don't know where to start, we have provided some beginner resources that help you start your journey: - [What is Blockchain?](.",
    // },
    // {
    //   uri: "bridge/architecture",
    //   name: "architecture.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Ad-Astra Bridge is a system that allows the transfer of ERC20 tokens between EVM-compatible chains and the MultiversX network. Currently, there are 2 bridges available: between the Ethereum and MultiversX networks and between the BSC and MultiversX networks.",
    // },
    // {
    //   uri: "bridge/axelar",
    //   name: "axelar.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "For more detailed information check out the [Become a Verifier]( Axelar docs. You can skip this if already having an Amplifier Verifier up and running.",
    // },
    // {
    //   uri: "bridge/token-types",
    //   name: "token-types.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "With the release of the bridge v3.0 & v3.1 different token types are allowed to be bridged. By token type, we refer to how the tokens are locked/burnt or unlocked/minted along with the chain side on which they are native. The decision of how the token should.",
    // },
    // {
    //   uri: "bridge/transfer-flows",
    //   name: "transfer-flows.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The main functionality of the bridge is to transfer tokens from one network to another. For example, a user can transfer tokens from an EVM-compatible chain to MultiversX or from MultiversX to an EVM-compatible chain. Besides the main functionality, there is the possibility to call a smart contract on MultiversX when doing a swap.",
    // },
    // {
    //   uri: "bridge/whitelist-requirements",
    //   name: "whitelist-requirements.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Before enabling a token to be sent via the Ad-Astra bridge, the token must be whitelisted. The whitelisting process is performed with the help of the MultiversX team.",
    // },
    // {
    //   uri: "developers/account-storage",
    //   name: "account-storage.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The MultiversX protocol offers the possibility of storing additional data under an account as key-value pairs. This can be useful for many use cases. A wallet owner can store key-value pairs by using the built-in function SaveKeyValue that receives any number of key-value pairs.",
    // },
    // {
    //   uri: "developers/best-practices/best-practices-basics",
    //   name: "best-practices-basics.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We'll start with something simple: code arrangement. It's best to separate your code into 4 main parts: This ensures that it's much easier to find what you're looking for, and it's also much easier for everyone else who's working on that smart contract. Additionally, it's also best to split endpoints by their level of access. Some endpoints might be owner-only, some might be usable only by a select few addresses from a whitelist, and some can be called by anyone.",
    // },
    // {
    //   uri: "developers/best-practices/biguint-operations",
    //   name: "biguint-operations.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "BigUint is simply a handle to the actual representation, similar to how system file handles work, so it's simply a struct with an i32 as member, representing the handle. All the operations have to be done through API functions, passing the handles for result, first operand, second operand. Using Rust's operator overloading feature, we're able to overwrite arithmetic operators and provide an easy way of adding BigUints, just like primitive number types. Even so, you might easily reach situations where you want to use the same number multiple times. For instance, let's say you have 4 BigUints: a, b, c, d, and you want to do the following operations:.",
    // },
    // {
    //   uri: "developers/best-practices/managed-decimal",
    //   name: "managed-decimal.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "ManagedDecimal is a generic type representing a fixed-point decimal number managed by the API. It is designed to handle decimal values with a specific number of decimals, providing operations such as addition, subtraction, multiplication, division, scaling, and conversion between different decimal precision and also more complex operations such as logarithm and nth root with a customizable degree of precision.",
    // },
    // {
    //   uri: "developers/best-practices/the-dynamic-allocation-problem",
    //   name: "the-dynamic-allocation-problem.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Smart contracts must avoid dynamic allocation. Due to the performance penalty incurred by dynamic allocation, the MultiversX Virtual Machine is configured with hard limits and will stop a contract that attempts too much allocation. Here are a few simple guidelines you can use to ensure your contract performs efficiently. By following them, you might notice a considerable reduction of gas consumption when your contract is called. It is also likely that the WASM binary resulting from compilation may become smaller in size, thus faster and cheaper to call overall.",
    // },
    // {
    //   uri: "developers/built-in-functions",
    //   name: "built-in-functions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX protocol has a set of built-in functions. A built-in function is a special protocol-side function that doesn't require a specific smart contract address as receiver of the transaction. When such a function is called via a transaction,.",
    // },
    // {
    //   uri: "developers/constants",
    //   name: "constants.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX uses some constants, which are specific to each chain . The updated values can be found at these sources: Mainnet:.",
    // },
    // {
    //   uri: "developers/contract-api-limits",
    //   name: "contract-api-limits.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Starting with the Polaris release , we have added blockchain data call limits for Smart Contracts. This means that in a single transaction, a Smart Contract cannot perform more than a protocol-level configured number of transfers, trie reads, or built-in function calls. This approach comes as a better alternative than increasing the gas costs of those operations since the limits are still very high, so most probably only the most expensive contracts' functions will suffer from these limitations.",
    // },
    // {
    //   uri: "developers/creating-wallets",
    //   name: "creating-wallets.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "How to create wallets using the CLI or programmatically Although wallets are commonly created through the [MultiversX Web Wallet], one can also use the CLI or the SDK.",
    // },
    // {
    //   uri: "developers/data/abi",
    //   name: "abi.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "To interact with a smart contract it is essential to understand its inputs and outputs. This is valid both for on-chain calls, and for off-chain tools, and can in most cases also tell us a lot about what the smart contract does and how it does it. For this reason, blockchain smart contracts have so-called ABIs, expressed in a platform-agnostic language - JSON in our case.",
    // },
    // {
    //   uri: "developers/data/code-metadata",
    //   name: "code-metadata.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Code metadata are flags representing the smart contract's allowed actions after deploy, specifically: The code metadata must be specified at deploy-time and, if the contract is upgradeable, it must be specified at upgrade-time, as well.",
    // },
    // {
    //   uri: "developers/data/composite-values",
    //   name: "composite-values.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We often need to group simple values into more complex ones, without splitting them into [several arguments]. Here too we opted for an encoding that is, above all, very easy to read.",
    // },
    // {
    //   uri: "developers/data/custom-types",
    //   name: "custom-types.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We sometimes create new types that we want to serialize and deserialize directly when interacting with contracts. For structs and enums it is very easy to set them up, with barely any code. Any structure defined in a contract of library can become serializable if it is annotated with either or all of: TopEncode, TopDecode, NestedEncode, NestedDecode.",
    // },
    // {
    //   uri: "developers/data/defaults",
    //   name: "defaults.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Smart contracts occasionally need to interact with uninitialized data. Most notably, whenever a smart contract is deployed, its entire storage will be uninitialized. Uninitialized storage is indistinguishable from empty storage values, or storage that has been deleted. It always acts like.",
    // },
    // {
    //   uri: "developers/data/multi-values",
    //   name: "multi-values.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "To recap, we have discussed about data being represented either in a: But even the top encoding only refers to a single object, being represented as a single array of bytes. This encoding, no matter how simple or complex, is the representation for a single argument, result, log topic, log event, NFT attribute, etc.",
    // },
    // {
    //   uri: "developers/data/serialization-overview",
    //   name: "serialization-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "In MultiversX, there is a specific serialization format for all data that interacts with a smart contract. The serialization format is central to any project because all values entering and exiting a contract are represented as byte arrays that need to be interpreted according to a consistent specification. In Rust, the multiversx-sc-codec crate ([crate]( [docs]( exclusively deals with this format. Both Go and Rust implementations of scenarios have a component that serializes to this format. DApp developers need to be aware of this format when interacting with the smart contract on the backend.",
    // },
    // {
    //   uri: "developers/data/simple-values",
    //   name: "simple-values.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We will start by going through the basic types used in smart contracts: Small numbers can be stored in variables of up to 64 bits. We use big endian encoding for all numbers in our projects.",
    // },
    // {
    //   uri: "developers/developer-reference/sc-annotations",
    //   name: "sc-annotations.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Annotations are the bread and butter of the multiversx-sc smart contract development framework. While contracts can in principle be written without any annotations or code generation macros in place, it is infinitely more difficult to do so. One of the main purposes of the framework is to make the code as readable and concise as possible, and annotations are the path to get there.",
    // },
    // {
    //   uri: "developers/developer-reference/sc-api-functions",
    //   name: "sc-api-functions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The Rust framework provides a wrapper over the MultiversX VM API functions and over account-level built-in functions. They are split into multiple modules, grouped by category: The base trait for the APi is:.",
    // },
    // {
    //   uri: "developers/developer-reference/sc-messages",
    //   name: "sc-messages.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The SC framework supports message interpolation in a variety of situations. The mechanism makes full use of managed types, and does not require memory allocation on the heap.",
    // },
    // {
    //   uri: "developers/developer-reference/sc-modules",
    //   name: "sc-modules.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Smart contract modules are a handy way of dividing a contract into smaller components. Modules also reduce code duplication, since they can be reused across multiple contracts. Modules can be defined both in the same crate as the main contract, or even in their own standalone crate. The latter is used when you want to use the same module in multiple contracts.",
    // },
    // {
    //   uri: "developers/developer-reference/sc-payments",
    //   name: "sc-payments.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We want to offer an overview on how smart contracts process payments. This includes two complementary parts: receiving tokens and sending them. On MultiversX it is impossible to send both EGLD and any ESDT token at the same time.",
    // },
    // {
    //   uri: "developers/developer-reference/sc-random-numbers",
    //   name: "sc-random-numbers.md",
    //   mimeType: "text/markdown",
    //   description:
    //     'Randomness in the blockchain environment is a challenging task to accomplish. Due to the nature of the environment, nodes must all have the same "random" generator to be able to reach consensus. This is solved by using Golang\'s standard seeded random number generator, directly in the VM: The VM function mBufferSetRandom uses this library, seeded with the concatenation of:.',
    // },
    // {
    //   uri: "developers/developer-reference/sc-to-sc-calls",
    //   name: "sc-to-sc-calls.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This guide provides an overview of the different types of smart contract calls that originate from other smart contract calls. Smart contract calls on MultiversX fall into two main categories: synchronous and asynchronous , each with distinct usage scenarios based on developer needs, and dApp architecture.",
    // },
    // {
    //   uri: "developers/developer-reference/storage-mappers",
    //   name: "storage-mappers.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The Rust framework provides various storage mappers you can use. Deciding which one to use for every situation is critical for performance. There will be a comparison section after each mapper is described. Note: All the storage mappers support additional key arguments.",
    // },
    // {
    //   uri: "developers/developer-reference/upgrading-smart-contracts",
    //   name: "upgrading-smart-contracts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The new Sirius Mainnet version 1.6.0 brings a significant update to how smart contracts can be upgraded. This release introduces a dedicated upgrade function, replacing the previous usage of the init function during contract upgrades. This change enhances the upgrade process and provides a clearer separation of concerns between contract initialization and subsequent upgrades. Note: Contracts deployed before version 1.6.0 will continue to function as before. The change in upgrade behavior applies only when upgrading the code of the contract. Existing contracts deployed only with an init function will still operate correctly without modifications.",
    // },
    // {
    //   uri: "developers/event-logs/contract-deploy-events",
    //   name: "contract-deploy-events.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "Contract deploy events are generated when a transaction involves either the deployment of a smart contract or an upgrade to an existing contract.",
    // },
    // {
    //   uri: "developers/event-logs/esdt-events",
    //   name: "esdt-events.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "ESDT Operations Events are generated in response to interactions with an ESDT token. These events help keep track of actions like creating new tokens, transferring tokens between addresses, burning tokens, etc.",
    // },
    // {
    //   uri: "developers/event-logs/execution-events",
    //   name: "execution-events.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "The execution events are generated in case of transaction with smart contract call or ESDT transaction or built-in function calls. The completedTxEvent event is generated when the execution of a transaction is completed,.",
    // },
    // {
    //   uri: "developers/gas-and-fees/egld-transfers",
    //   name: "egld-transfers.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "For EGLD transfers, the actual gas cost of processing is easy to determine precisely, since it only contains the value movement and data handling component. The gas limit should be set to the actual gas cost, according to the previously depicted formula:.",
    // },
    // {
    //   uri: "developers/gas-and-fees/overview",
    //   name: "gas-and-fees-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The processing cost of a MultiversX transaction is determined by its gas limit, the actual gas consumption, and the gas price per gas unit, leading to a processing fee in EGLD that may be subject to a gas refund in certain cases. Each MultiversX transaction has a processing cost, expressed as an amount of gas units. At broadcast time, each transaction must be provided a gas limit , which acts as an upper limit of the processing cost.",
    // },
    // {
    //   uri: "developers/gas-and-fees/system-smart-contracts",
    //   name: "system-smart-contracts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "For transactions which call System Smart Contracts, the actual gas cost of processing contains the two previously mentioned cost components - and they are easily computable. For more details, please follow:.",
    // },
    // {
    //   uri: "developers/gas-and-fees/user-defined-smart-contracts",
    //   name: "user-defined-smart-contracts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "For user-defined Smart Contract deployments and function calls, the actual gas consumption of processing contains both of the previously mentioned cost components - though, while the value movement and data handling component is easily computable , the contract execution component is hard to determine precisely a priori. Therefore, for this component we have to rely on simulations and estimations. For simulations, we will start a local testnet using mxpy ). Thus, before going further, make sure your local testnet is up and running.",
    // },
    // {
    //   uri: "developers/guard-accounts",
    //   name: "guard-accounts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "On this page, you will find comprehensive information on all aspects of guarded transactions. Phishing attacks that scam people have become a constant problem on blockchains in general, especially when newbies to the crypto world are granted easy access to this new economy. In light of these new challenges, it is important to continue educating people on specific ways to protect themselves while also considering new methods to add protection against such attacks. That's how we came to a method that we called Guardians, an optional security feature that any user can enable.",
    // },
    // {
    //   uri: "developers/guidelines/react-development",
    //   name: "react-development.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Every developer has his/her own code style that has been developed along the way, with bits and quirks that, at some point, become a part of oneself. However, in a big team and in a big project, small quirks and personal preferences can add up and turn the codebase into a big lasagna.",
    // },
    // {
    //   uri: "developers/meta/interactor/interactors-example",
    //   name: "interactors-example.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "To gain a practical understanding of how interactors work, let's examine an example using the adder contract. We'll generate an interactor template and demonstrate how to utilize its features effectively. While some steps are optional and depend on developer preference, they are included for comprehensive understanding. In order to save time, we will also generate the adder contract, using the following command:.",
    // },
    // {
    //   uri: "developers/meta/interactor/interactors-overview",
    //   name: "interactors-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Interactors are Rust programs designed to facilitate interactions with smart contracts on the blockchain. They are essential for system testing and managing the setup and execution of smart contracts in a live blockchain environment. Making use of unified syntax, proxies, and the capability to be autogenerated using sc-meta all snippets, interactors streamline the interaction process, providing a quick and efficient solution for system testing, seamlessly integrating with the development workflow. Before using interactors, make sure you have the following setup:.",
    // },
    // {
    //   uri: "developers/meta/rust-nightly",
    //   name: "rust-nightly.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Starting with framework version [v0.50.0]( MultiversX smart contracts can be built using stable Rust. Before this version, nightly Rust was required.",
    // },
    // {
    //   uri: "developers/meta/sc-allocator",
    //   name: "sc-allocator.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX smart contracts are compiled to WebAssembly, which does not come with memory allocation out of the box. In general WebAssembly programs need special memory allocation functionality to work with the heap. Using traditional memory allocation is highly discouraged on MultiversX. There are several reasons:.",
    // },
    // {
    //   uri: "developers/meta/sc-build-reference",
    //   name: "sc-build-reference.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "To build a contract, navigate to the contract folder and run the following command: sh.",
    // },
    // {
    //   uri: "developers/meta/sc-config",
    //   name: "sc-config.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We like to say that developers don't write smart contracts directly, rather they write specifications for smart contracts, from which an automated process creates the smart contracts themselves. This philosophy has two practical implications:.",
    // },
    // {
    //   uri: "developers/meta/sc-meta-cli",
    //   name: "sc-meta-cli.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "As mentioned [before], the meta tool comes in two flavors, one for the individual contract , and the other as a standalone tool. We will go through the CLI of both of these flavors.",
    // },
    // {
    //   uri: "developers/meta/sc-meta",
    //   name: "sc-meta.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We have developed a universal smart contract management tool, called multiversx-sc-meta . It is called that, because it provides a layer of meta-programming over the regular smart contract development. It can read and interact with some of the code written by developers.",
    // },
    // {
    //   uri: "developers/overview",
    //   name: "developers-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page serves as the landing destination for builders seeking to construct on the Multiversx platform. If anything is missing, or you want to get more support, please refer to Discord or Telegram developers chats:.",
    // },
    {
        uri: "developers/relayed-transactions",
        name: "relayed-transactions.md",
        mimeType: "text/markdown",
        description: "On this page, you will find comprehensive information on all aspects of relayed transactions. Relayed transactions are transactions with the fee paid by a so-called relayer.",
    },
    // {
    //   uri: "developers/reproducible-contract-builds",
    //   name: "reproducible-contract-builds.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of supporting [reproducible contract builds] of a frozen Docker image that was used for its previous build .",
    // },
    // {
    //   uri: "developers/sc-calls-format",
    //   name: "sc-calls-format.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page provides an in-depth examination of the Smart Contract Calls Data Format. Besides regular move-balance transactions ,.",
    // },
    // {
    //   uri: "developers/setup-local-testnet-advanced",
    //   name: "setup-local-testnet-advanced.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "How to set up a local MultiversX Testnet on a workstation. First, clone [mx-chain-go]( and [mx-chain-proxy-go]( in a directory of your choice.",
    // },
    // {
    //   uri: "developers/setup-local-testnet",
    //   name: "setup-local-testnet.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This guide describes how to set up a local mini-testnet - also known as localnet - using mxpy. The purpose of a localnet is to allow developers experiment with and test their Smart Contracts, in addition to writing unit and integration tests. The localnet contains:.",
    // },
    // {
    //   uri: "developers/signing-transactions/signing-transactions",
    //   name: "signing-transactions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "By reading this page you will find out how to serialize and sign the Transaction payload. Transactions must be signed with the Sender's Private Key before submitting them to the MultiversX Network. Signing is performed with the [Ed25519]( algorithm.",
    // },
    // {
    //   uri: "developers/signing-transactions/tools-for-signing",
    //   name: "tools-for-signing.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "In order to sign a transaction without actually dispatching it, several tools can be used. Two of the most popular ones are: [mxpy] or [sdk-js-wallet-cli]. Using a pem file:.",
    // },
    // {
    //   uri: "developers/smart-contracts",
    //   name: "smart-contracts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The MultiversX Blockchain's virtual machine executes [WebAssembly]( This means that it can execute smart contracts written in any programming language that can be compiled to WASM bytecode. Though, we only provide support for Rust.",
    // },
    // {
    //   uri: "developers/testing/rust/mandos-trace",
    //   name: "mandos-trace.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "A Mandos trace is an auto-generated scenario file derived from the logic within an integration test. We can generate a Mandos trace in the contract's root directory by initiating the trace at the start of the test and saving it as a JSON file at the end, as demonstrated below: rust title=blackboxtest.rs.",
    // },
    // {
    //   uri: "developers/testing/rust/sc-blackbox-calls",
    //   name: "sc-blackbox-calls.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "With the addition of unified syntax and new proxies, blackbox testing becomes the easiest and most accessible way to write integration tests for smart contracts. We can identify four types of transactions that can be ran in the testing environment: As mentioned in [TxEnv], in order to be able to create transactions in the testing environment, we need to create an instance of the ScenarioWorld struct. In order to actually send the transaction, we need to finish it with .run.",
    // },
    // {
    //   uri: "developers/testing/rust/sc-blackbox-example",
    //   name: "sc-blackbox-example.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The best way to dive into the smart contract test framework is by dissecting a minimal example. rust title=adderblackboxtest.rs.",
    // },
    // {
    //   uri: "developers/testing/rust/sc-test-overview",
    //   name: "sc-test-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "There are several ways to write smart contract tests in Rust directly. This is for the largest part possible because of the Rust VM and debugger that can act as an execution backend. This is a simplified diagram of what a Rust test will do during its execution:.",
    // },
    // {
    //   uri: "developers/testing/rust/sc-test-setup",
    //   name: "sc-test-setup.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Since we don't have native execution in the Rust backend yet, the only way to run contracts is to register the contract implementation for the given contract code identifier. In simpler words, we tell the environment \"whenever you encounter this contract code, run this code that I've written instead\". Since this operation is specific to only the Rust debugger, it doesn't go through the mandos pipeline.",
    // },
    // {
    //   uri: "developers/testing/rust/whitebox-legacy-functions-reference",
    //   name: "whitebox-legacy-functions-reference.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page contains a list of all the currently available functions for the Rust Testing Framework, specifically the ones that the BlockchainStateWrapper type provides. Note: You will notice that most functions use the numbigint::BigUint type for numbers. This is NOT the same as the BigUint type you use inside smart contracts. It comes from a Rust library, and they are different types. It is recommended to always use the Rust version outside of lambda functions, and only use the managed type when interacting with the sc directly.",
    // },
    // {
    //   uri: "developers/testing/rust/whitebox-legacy",
    //   name: "whitebox-legacy.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The Rust testing framework was developed as an alternative to manually writing scenario tests. This comes with many advantages: The only disadvantage is that you need to learn something new! Jokes aside, keep in mind that this whole framework runs in a mocked environment. So while you get powerful testing and debugging tools, you are ultimately running a mock and have no guarantee that the contract will work identically with the current VM version deployed on the mainnet.",
    // },
    // {
    //   uri: "developers/testing/sc-debugging",
    //   name: "sc-debugging.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Debugging smart contracts is possible with the integrated debugger in Visual Studio Code. You will be able to debug your contract just like you would debug a regular program. For this tutorial, you will need:.",
    // },
    // {
    //   uri: "developers/testing/scenario/concept",
    //   name: "scenario-concept.md",
    //   mimeType: "text/markdown",
    //   description:
    //     'MANDOS is short for MultiversX Account, Network and Data Operation Scenarios. We sometimes call them simply "scenarios". They were designed to test the VM and the early contracts in a language-agnostic way, hence initially implemented in JSON.',
    // },
    // {
    //   uri: "developers/testing/scenario/generating-scenarios",
    //   name: "generating-scenarios.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "There are currently several ways to generate scenarios. The combination of generating and running scenarios is very powerful, since it means tests written originally for one system can be run of different systems too.",
    // },
    // {
    //   uri: "developers/testing/scenario/running-scenarios",
    //   name: "running-scenarios.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Most of the MultiversX smart contract testing infrastructure is built with scenarios in mind, so there are lots of ways to execute them. mermaid.",
    // },
    // {
    //   uri: "developers/testing/scenario/structure-json",
    //   name: "structure-json.md",
    //   mimeType: "text/markdown",
    //   description:
    //     'Scenario JSON files are designed to be readable by humans too. This is why you will see Scenario files should end in .scen.json, where "scen" comes from "scenario". The framework uses the double extension to identify tests to attempt running. Any other extension will be ignored.',
    // },
    // {
    //   uri: "developers/testing/scenario/values-complex",
    //   name: "values-complex.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We already covered representations of simple types [here]. This is enough for arguments of types like usize, BigUint or &[u8], but we need to also somehow specify complex types like custom structs or lists of items. It is possible to concatenate multiple expressions using the pipe operator . The pipe operator takes precedence over everything, so it is not currently possible to concatenate and then apply a function to the whole result.",
    // },
    // {
    //   uri: "developers/testing/scenario/values-simple",
    //   name: "values-simple.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "We went through the structure of a scenario, and you might have noticed that in a lot of places values are expressed in diverse ways. The VM imposes very few restrictions on its inputs and outputs, most fields are processed as raw bytes. The most straightforward way to write a test that one could think of would be to have the actual raw bytes always expressed in a simple format . Indeed, our first contract tests were like this, but we soon discovered that it took painfully long prepare them and even longer to refactor. So, we gradually came up with increasingly complex formats to represent values in an intuitive human-readable way.",
    // },
    // {
    //   uri: "developers/testing/testing-in-go",
    //   name: "testing-in-go.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "At some point in the past we built some testing solutions in Go. They were never very popular, but are worth mentioning. This page is currently a stub. If there is interest in this type of testing, we will expand it further.",
    // },
    // {
    //   uri: "developers/testing/testing-overview",
    //   name: "testing-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "What does it mean to test a smart contract? Well, smart contracts are little programs that run on the blockchain, so the first step is to find an environment for them to run.",
    // },
    // {
    //   uri: "developers/transactions/tx-data",
    //   name: "tx-data.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The data field can hold arbitrary data, but for practical purposes, it is normally one of three: We can always give this data in raw form, however, we usually prefer using a proper type system, for safety.",
    // },
    // {
    //   uri: "developers/transactions/tx-env",
    //   name: "tx-env.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "When discussing the unified transaction syntax, we identify four primary environments crucial for developing and deploying secure smart contracts on MultiversX. This design aims to cover all essential development stages, ensuring a seamless workflow. Notably, it streamlines the process for Rust developers by empowering them to solely concentrate on mastering Rust. As a result, they can effortlessly write, test, deploy, and interact with smart contracts without the burden of learning additional complementary technologies. The environments:.",
    // },
    // {
    //   uri: "developers/transactions/tx-from",
    //   name: "tx-from.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Within the context of a transaction that comprises seven distinct generics, From represents the second generic field — the entity that initiates the transaction. It is required in three environments: the integration test, the parametric test, and the interactor. A transaction originating from a contract environment cannot have a sender in the contract environment. The reason is that the current contract is always the same: the contract that starts the transaction.",
    // },
    // {
    //   uri: "developers/transactions/tx-gas",
    //   name: "tx-gas.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Gas is the fourth generic that originated from a transaction. It sets an explicit gas limit for the call. Some transactions require explicit gas, others do not necessitate it. The gas limit can be set using the .gas method. Gas is normally represented as a u64 value.",
    // },
    // {
    //   uri: "developers/transactions/tx-impl-details",
    //   name: "tx-impl-details.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Some less relevant implementation details relegated here. Should not be relevant to the average user. - value.",
    // },
    // {
    //   uri: "developers/transactions/tx-legacy-calls",
    //   name: "tx-legacy-calls.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This is the old contract call syntax, which was in use before the introduction of the unified transaction syntax. All of the objects described in this page are deprecated since version 0.49.0.",
    // },
    // {
    //   uri: "developers/transactions/tx-migration",
    //   name: "tx-migration.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "There is an older syntax for producing contract calls, detailed [here]. It is already in use in many projects. Upgrading to framework version 0.49.0 is almost completely backwards compatible, but the new syntax is nicer and more reliable, so we encourage everyone to migrate.",
    // },
    // {
    //   uri: "developers/transactions/tx-overview",
    //   name: "tx-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "A big part of the life of a blockchain developer is to create and launch blockchain transactions. Whether it's an off-chain tool, smart contract code, or a testing scenario, it is important that we have a powerful syntax to express any conceivable transaction.",
    // },
    // {
    //   uri: "developers/transactions/tx-payment",
    //   name: "tx-payment.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Payments can be easily attached to the transaction with the new syntax through the Payment generic. In order to specialize the generic, the framework provides the .payment method, which accepts all legal types such as: EsdtTokenPayment, , ManagedVec<EsdtTokenPayment>, etc. The framework also provides other various helper methods, basically wrappers around .payment for accessibility. The payment is a little more complex than the previous fields. The .payment method is sufficient to set any kind of acceptable payment object. However, we have several more functions to help setup the payment field:.",
    // },
    // {
    //   uri: "developers/transactions/tx-proxies",
    //   name: "tx-proxies.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Proxies are objects that mimic the contract, they provide methods with the same names and the same argument types. When called, they will format a transaction for the contract. So they act as translators: you can call them just like regular functions, and they will translate it for the blockchain and pass on the call. They also tell you what type the function is expected to return. New proxies are generated as structures. If you have the proxy, you have all its methods. The generated code is in plain sight and readable, designed to add no overhead to the contract binaries once compiled.",
    // },
    // {
    //   uri: "developers/transactions/tx-result-handlers",
    //   name: "tx-result-handlers.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Most of the transaction fields are inputs, or work like inputs. The last one of the fields is the one that deals with the outputs. There are 3 types of transactions where it comes to outputs:.",
    // },
    // {
    //   uri: "developers/transactions/tx-run",
    //   name: "tx-run.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "As discussed previously, the transaction syntax is consistent through the various transaction environments. However, when sending the transaction across a specific environment, certain conditions apply, depending on the framework's capability of processing the information and the route of the transaction. The transaction itself is not different and will produce the same result, but the way the framework processes the transaction might differ depending on the environment.",
    // },
    // {
    //   uri: "developers/transactions/tx-to",
    //   name: "tx-to.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Among the seven distinct generics defining a transaction, To signifies the third generic field - the entity that receives the transaction. With the exception of deployments, it is required to be specified for every transaction in any environment. The sender is being set using the .to method. Several types can be specified:.",
    // },
    // {
    //   uri: "developers/tutorials/chain-simulator-adder",
    //   name: "chain-simulator-adder.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This tutorial will guide you to interact with Chain Simulator using the SpaceCraft interactors in Adder smart contract. Before we dive in and explore how easy it can be, make sure you have the following:.",
    // },
    // {
    //   uri: "developers/tutorials/crowdfunding-p1",
    //   name: "crowdfunding-p1.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Write, build and deploy a simple smart contract written in Rust This tutorial will guide you through the process of writing, building and deploying a very simple smart contract for the MultiversX Network, written in Rust.",
    // },
    // {
    //   uri: "developers/tutorials/crowdfunding-p2",
    //   name: "crowdfunding-p2.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Define contract arguments, handle storage, process payments, define new types, write better tests The previous chapter left us with a minimal contract as a starting point.",
    // },
    // {
    //   uri: "developers/tutorials/dex-walkthrough",
    //   name: "dex-walkthrough.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "If you are building a project that involves decentralized exchange functionality, integrating DEX contracts can be a crucial step in achieving your goals. These contracts provide the underlying infrastructure necessary to facilitate the exchange of assets on a decentralized platform. However, implementing these contracts can be a complex process, and understanding the various public endpoints and functions can be challenging. In this in-depth walkthrough, we will guide you through the process of integrating DEX contracts into your MultiversX project. We will cover all of the main contracts involved in a typical DEX implementation, and provide detailed explanations of the most commonly used public endpoints. By the end of this tutorial, you should have a solid understanding of how to implement DEX functionality in your own project, and be able to make informed decisions about how to customize and extend the functionality to meet your specific needs. The DEX contracts are a bit more advanced than the standard SCs, so basic knowledge about Rust SC development is required. If you are a beginner, an easier starting point is strongly advised. Also, to better grasp the DEX contracts implementation, it is important that you first understand the xExchange economic model.",
    // },
    // {
    //   uri: "developers/tutorials/energy-dao",
    //   name: "energy-dao.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This tutorial will provide an in-depth analysis of the Energy DAO SC template, diving deeper into the concept of Energy and how a smart contract can use it to provide utility for users. Furthermore, while going through the various features of the contract, we will underline different aspects about how you can modify the template, in order to best suit your requirements. While being in a way a variation of the auto-farm SC, it was designed as a completely independent contract in the mx-exchange-tools repo. It can be cloned directly, without the need to import any other contract. The only external dependency is the xExchange suite of contracts, that are referenced through a Github commit hash from the latest version of that repo.",
    // },
    // {
    //   uri: "developers/tutorials/eth-to-mvx",
    //   name: "eth-to-mvx.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "In the last period smart contracts suffered a rapid growth as many blockchains brought on the table better and better ways to develop one. In this article we will make a short comparison between writing a smart contract in Ethereum and one in MultiversX, and bring you another perspective from the Ethereum background to what could be an amazing experience of developing in Rust with SpaceCraftSDK - MultiversX's framework. The Ethereum execution client relies on Solidity as its programming language, even though it provides several implementations and support for multiple other languages such as Javascript, Rust, Python, Java, C++, C# and Go.",
    // },
    // {
    //   uri: "developers/tutorials/interactors-guide",
    //   name: "interactors-guide.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This short guide demonstrates how to deploy and interact with a smart contract on MultiversX using the SpaceCraft interactors. We will cover essential topics such as the SC framework, integration tests, sc-meta, and interactors . Building smart contracts involves complex tasks. Beyond the syntax, a smart contract acts as a public server where users pay for actions. Enforcing rules to ensure safety and efficiency for all users interacting with the contract is crucial.",
    // },
    // {
    //   uri: "developers/tutorials/staking-contract",
    //   name: "staking-contract.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This tutorial aims to teach you how to write a simple staking contract, and to illustrate and correct the common pitfalls new smart contract developers might fall into. If you find anything not answered here, feel free to ask further questions on the MultiversX Developers Telegram channel:.",
    // },
    // {
    //   uri: "developers/tutorials/wallet-connect-v2-migration",
    //   name: "wallet-connect-v2-migration.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Using @multiversx/sdk-dapp >= 2.2.8 or @elrondnetwork/dapp-core >= 2.0.0 WalletConnect 2.0 is already integrated, only not enabled by default.",
    // },
    // {
    //   uri: "developers/tutorials/your-first-dapp",
    //   name: "your-first-dapp.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Let's build your first decentralized application on the MultiversX Blockchain! Before starting this tutorial, make sure you have the following:.",
    // },
    // {
    //   uri: "developers/tutorials/your-first-microservice",
    //   name: "your-first-microservice.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Let's build a microservice for your decentralized App This guide extends the [Build a dApp in 15 minutes guide], please follow it before following this one.",
    // },
    // {
    //   uri: "economics/staking-providers-apr",
    //   name: "staking-providers-apr.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Staking Providers are entities that allow their delegators, plus the owner's funds to deploy validators on the Network. The Staking Provider owner is responsible for the nodes' up-time, as well as for configuring the contract's parameters. According to the contract's configuration and operations, the delegation cap,.",
    // },
    // {
    //   uri: "governance/governance-interaction",
    //   name: "governance-interaction.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The interaction with the governance system smartcontract is done through correctly formatted transactions to submit actions and through the usage of the vm-query REST API calls for reading the proposal status. The proposal creation transaction has the following parameters:.",
    // },
    // {
    //   uri: "integrators/accounts-management",
    //   name: "accounts-management.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Managing Wallets and Addresses This page summarizes the recommended approach for managing accounts in an application that integrates with the Network.",
    // },
    // {
    //   uri: "integrators/advanced-observer-settings",
    //   name: "advanced-observer-settings.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes some of the settings an integrator might want to apply on the observers in order to better make use of the nodes. For the settings from the config.toml file that are needed to be altered, we recommend using the OverridableConfigTomlValues section found in the prefs.toml file. More info can be found [here].",
    // },
    // {
    //   uri: "integrators/creating-transactions",
    //   name: "creating-transactions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes how to create, sign and broadcast transactions to the MultiversX Network. As described in section [Signing Transactions], a ready-to-broadcast transaction is structured as follows:.",
    // },
    // {
    //   uri: "integrators/deep-history-squad",
    //   name: "deep-history-squad.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the Deep History Squad, which holds the entire trie data, so it can be used to query the state of an account at any point in time. A variant of the standard [observing squad] is one that retains a non-pruned history of the blockchain and allows one to query the state of an account at an arbitrary block in the past. Such a setup is called a [deep-history observing squad](.",
    // },
    // {
    //   uri: "integrators/egld-integration-guide",
    //   name: "egld-integration-guide.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This section provides high-level technical requirements of integrating the MultiversX's native coin, EGLD in a platform that handles EGLD transactions for their users. In order to make possible for a platform to integrate EGLD transactions for its users, these are the minimum requirements:.",
    // },
    // {
    //   uri: "integrators/esdt-tokens-integration-guide",
    //   name: "esdt-tokens-integration-guide.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Integrating ESDT tokens support can be done alongside native EGLD integration, so one should refer to the [egld-integration-guide]. The only differences are internal ways to store ESDT tokens alongside with their token identifier and number of decimals and different approaches.",
    // },
    // {
    //   uri: "integrators/faq",
    //   name: "integrators-faq.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page contains answers to frequently asked questions about connecting an application to MultiversX, be it an exchange, wallet, dApp, Web3 indexer or data provider. EGLD on Mainnet, XeGLD on Devnet and Testnet. The atomic unit of the native token is not named.",
    // },
    // {
    //   uri: "integrators/observing-squad",
    //   name: "observing-squad.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The N+1 setup for connecting to the MultiversX Network In order to integrate with the MultiversX Network and be able to [broadcast transactions] and [query blockchain data] in an optimized approach, one needs to set up an on-premises Observing Squad.",
    // },
    // {
    //   uri: "integrators/overview",
    //   name: "integrators-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "If you want to integrate the MultiversX Network in your app, even if we are talking about an exchange, wallet, or a dApp that uses its own infrastructure, please choose a direction from the following table.",
    // },
    // {
    //   uri: "integrators/querying-the-blockchain",
    //   name: "querying-the-blockchain.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes how to query the Network in order to fetch data such as transactions and blocks . On this page, we refer to the [Gateway REST API] - i.e. the one backed by an [observing squad].",
    // },
    // {
    //   uri: "integrators/snapshotless-observing-squad",
    //   name: "snapshotless-observing-squad.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the Snapshotless Observing Squad, a type of Observing Squad optimized for real-time requests such as accounts data fetching and vm-query operations. More details related to exposed endpoints are available [here].",
    // },
    // {
    //   uri: "integrators/walletconnect-json-rpc-methods",
    //   name: "walletconnect-json-rpc-methods.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The WalletConnect [Sign API] and in WalletConnect's [Web Examples](.",
    // },
    // {
    //   uri: "learn/architecture-overview",
    //   name: "architecture-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX is a high-throughput public blockchain aimed at providing security, efficiency, scalability and interoperability, beyond the current state-of-the-art. The two most important features that set MultiversX apart are Adaptive State Sharding and the Secure Proof of Stake consensus mechanism. MultiversX is a complete redesign of blockchain architecture with the aim to achieve global scalability and near instant transaction speed. MultiversX's architecture rests on the following key innovations:.",
    // },
    // {
    //   uri: "learn/chronology",
    //   name: "chronology.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Following the common Proof-of-Stake principles, the MultiversX network organizes time into rounds and epochs, where a fixed number of consecutive rounds form an epoch. The first round of the first epoch ever is called the genesis round, which contains the bootstrapping phase of the network. Each round has a fixed time duration, consistent across the network, currently decided to be 6 seconds. In [Architecture overview] we mentioned that the MultiversX network is sharded. Because all shards process transactions in parallel and in lock-step, it means that in each round, inside a shard, at most one block may be added to the shard's blockchain. There may be rounds where no block is added to the blockchain, for example when consensus is not reached or when the designated consensus group leader is offline and cannot propose a block.",
    // },
    // {
    //   uri: "learn/consensus",
    //   name: "consensus.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX's approach for consensus is called Secure Proof of Stake . It innovates in the manner in which validator nodes are selected for consensus out of a shard and also in the steps taken by the validators to complete the consensus process as efficiently as possible. Let's take a look. At the beginning of each round, SPoS selects validators for consensus using a randomness source that can be neither predicted, nor influenced. It is surprisingly simple, requiring only to be calculated from the previous block and to be signed by the consensus leader of the current round . The resulting signature will be the randomness source for the next round, and due to its reliance on the immediately preceding block, it cannot be known more than a round in advance.",
    // },
    // {
    //   uri: "learn/economics",
    //   name: "economics.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "In this page you can find more about the MultiversX economics, the EGLD token supply, how fees are collected, how rewards and distributed and so on. The MultiversX blockchain economy is designed around eGold - a powerful digital currency positioned for global adoption.",
    // },
    // {
    //   uri: "learn/EGLD",
    //   name: "EGLD.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "EGLD is the native cryptocurrency of MultiversX, functioning as digital, global money. It's the primary asset used within the MultiversX ecosystem. EGLD is the lifeblood of MultiversX. When you send EGLD or use a MultiversX application, you'll pay a fee in EGLD to use the network. This fee incentivizes validators to process and verify transactions.",
    // },
    // {
    //   uri: "learn/entities",
    //   name: "entities.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "There are two primary entities in MultiversX: users and nodes. A user is anyone holding one or more pairs of keys . Using a pair of keys, the user can submit signed transactions to the network. The MultiversX network treats each pair of keys as an account, and each account implicitly has an associated amount of EGLD tokens, called the balance of the account. Moreover, an account also has an associated mapping storage, which holds arbitrary values.",
    // },
    // {
    //   uri: "learn/getting-started",
    //   name: "getting-started.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX is a high-performance, sharded smart contract blockchain with Proof of Stake consensus, perfectly designed for the Web3 era with capacity to serve Web2 needs. At the moment of writing, it achieves over 30,000 TPS with adaptive scalability, offering fast and low-cost transactions. The xPortal money app, with embedded DeFi and cross-chain operations, empowers users to interact and own their digital assets. Developers benefit from integrated tools and 30% gas royalties, while validators earn ~8% APR. MultiversX offers sovereign chains for flexible, interoperable blockchain solutions, serving enterprise needs, driving the Web3 vision forward. It is a public blockchain similar to Ethereum, users own their accounts and tokens and they are free to move between [more than 500 different apps]( If you're not on MultiversX, get started by creating your wallet with [xPortal]( or [xWallet](.",
    // },
    // {
    //   uri: "learn/multiversx-ecosystem",
    //   name: "multiversx-ecosystem.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX is a global network of interconnected computers that adhere to the [MultiversX Protocol]( providing a robust foundation for communities, applications, organizations, and digital assets. This decentralized platform enables users to create and manage their MultiversX accounts from anywhere in the world, at any time. With MultiversX, you can explore a vast ecosystem of applications or develop your own, all without relying on a central authority that could alter the rules or limit your access. The core innovation of MultiversX lies in its trustless environment, ensuring that the network remains open, transparent, and secure for all participants.",
    // },
    // {
    //   uri: "learn/sharding",
    //   name: "sharding.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Sharding was first used in databases and is a method for distributing data across multiple machines. This makes it a scaling technique, and can be used by blockchain networks to partition states and transaction processing, so that each node of the network would only need to process a fraction of all the transactions. Moreover, sharding allows for the parallel processing of transactions. As long as there is a sufficient number of nodes verifying each transaction, ensuring high reliability and security, then splitting a blockchain into shards will allow it to process far more transactions by means of parallelization, and thus greatly improving transaction throughput and efficiency. Moreover, sharding promises to increase the throughput of the network as it expands and the number of validator grows - a property called horizontal scaling. We emphasize the three main types of sharding: network sharding, transaction sharding and state sharding, described in the next paragraphs.",
    // },
    // {
    //   uri: "learn/space-vm",
    //   name: "space-vm.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The execution of SmartContracts plays a central role in modern blockchain networks. MultiversX built a fast and secure virtual machine for this purpose. Because the MultiversX VM executes [WebAssembly]( it also means that it can execute smart contracts written in any programming language that can be compiled to WASM bytecode. Though, we only provide support for writing contracts in Rust.",
    // },
    // {
    //   uri: "learn/transactions",
    //   name: "learn-transactions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "A blockchain transaction is a cryptographically signed instruction sent from one account to another, aiming to update the state of the blockchain network. Each transaction contains details such as the nonce, sender, receiver, amount of value transferred , data, signature . Validators process and verify these transactions, ensuring they are legitimate and adhere to the network's protocol. Once verified, the transaction is recorded in a block and added to the blockchain, making it immutable and transparent. A MultiversX transaction is an action initiated by an account managed by a user. For example, when Bob sends Alice 1 EGLD, Bob's account is debited and Alice's is credited. This state-changing action occurs within a transaction.",
    // },
    // {
    //   uri: "sdk-and-tools/chain-simulator",
    //   name: "chain-simulator.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Chain simulator is a piece of software that provides all the mx-chain-proxy-go endpoints and includes additional endpoints for specific operations.",
    // },
    // {
    //   uri: "sdk-and-tools/devcontainers",
    //   name: "devcontainers.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "In Visual Studio Code, you use a container as a [full-featured development environment]]( This one includes mxpy, Rust, sc-meta, a few Visual Studio Code extensions, and more.",
    // },
    // {
    //   uri: "sdk-and-tools/elastic-indexer",
    //   name: "elastic-indexer.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This feature will work starting from rc/v1.6.0 version of the node A MultiversX observer node can send messages over WebSocket to an elastic indexer service, which will process and index the data in an Elasticsearch database.",
    // },
    // {
    //   uri: "sdk-and-tools/elastic-search-wrong-mappings-fix",
    //   name: "elastic-search-wrong-mappings-fix.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Starting with the February 2023 mainnet upgrade new constrains for Elasticsearch indices were added. Therefore, one can notice that the observers that index data in the Elasticsearch will remain stuck with an error similar to:.",
    // },
    // {
    //   uri: "sdk-and-tools/elastic-search",
    //   name: "elastic-search.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "A MultiversX node can enable the indexing within an Elasticsearch instance. Indexed data will serve as historical data source that can be used as it is for searching purposes or to serve a front-end application.",
    // },
    // {
    //   uri: "sdk-and-tools/erdcpp",
    //   name: "erdcpp.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX SDK for C++ erdcpp consists of C++ helpers and utilities for interacting with the Blockchain.",
    // },
    // {
    //   uri: "sdk-and-tools/erdkotlin",
    //   name: "erdkotlin.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX SDK for Kotlin erdkotlin consists of Kotlin helpers and utilities for interacting with the Blockchain.",
    // },
    // {
    //   uri: "sdk-and-tools/google-bigquery",
    //   name: "google-bigquery.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page succinctly describes how to use Google BigQuery to analyze data from the MultiversX blockchain. The MultiversX BigQuery dataset closely resembles the set of indices of the [MultiversX Elasticsearch instance]. Their schema and data are approximately equivalent, the data [being mirrored from the Elasticsearch instance to BigQuery].",
    // },
    // {
    //   uri: "sdk-and-tools/indices/accounts",
    //   name: "accounts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the accounts index , and also depicts a few examples of how to query it. The id field of this index is represented by a bech32 encoded address.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/accountsesdt",
    //   name: "accountsesdt.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the accounts-esdt index , and also depicts a few examples of how to query it. The id field of this index is composed in this way: {bech32address}-{tokenIdentifier}-{nonce} .",
    // },
    // {
    //   uri: "sdk-and-tools/indices/accountsesdthistory",
    //   name: "accountsesdthistory.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the accounts-esdt-history index , and also depicts a few examples of how to query it. The id field of this index is composed in this way: {bech32address}{tokenIdentifier}{nonce}{timestamp} .",
    // },
    // {
    //   uri: "sdk-and-tools/indices/accountshistory",
    //   name: "accountshistory.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the accounts-history index , and also depicts a few examples of how to query it. The id field of this index is composed in this way: {bech32address}{timestamp} .",
    // },
    // {
    //   uri: "sdk-and-tools/indices/blocks",
    //   name: "blocks.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the blocks index , and also depicts a few examples of how to query it. The id field of this index is represented by the block hash, in a hexadecimal encoding.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/delegators",
    //   name: "delegators.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the delegators index , and also depicts a few examples of how to query it. The id field of this index is composed in this way: blake2bHash, in a base64 encoding .",
    // },
    // {
    //   uri: "sdk-and-tools/indices/epochinfo",
    //   name: "epochinfo.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the epoch-info index , and also depicts a few examples of how to query it. The id field of this index is represented by epoch.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/events",
    //   name: "events.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the events index , and also depicts a few examples of how to query it. The id field for this index is composed of hex-encoded hash of the transaction or the smart contract result that generated the log plus shard ID and order of event.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/logs",
    //   name: "logs.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the logs index , and also depicts a few examples of how to query it. The logs index will be deprecated and removed in the near future.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/miniblocks",
    //   name: "miniblocks.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the miniblocks index , and also depicts a few examples of how to query it. The id field of this index is represented by the miniblock hash, in a hexadecimal encoding.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/operations",
    //   name: "operations.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the operations index , and also depicts a few examples of how to query it. The id field of this index is represented by the transactions OR smart contract result hash, in a hexadecimal encoding.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/rating",
    //   name: "validators-indices-rating.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the rating index , and also depicts a few examples of how to query it. The id field of this index is composed in this way: {validatorblskey}{epoch} .",
    // },
    // {
    //   uri: "sdk-and-tools/indices/receipts",
    //   name: "receipts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the receipts index , and also depicts a few examples of how to query it. The id field of this index is composed of hex encoded receipt hash.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/rounds",
    //   name: "rounds.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the rounds index , and also depicts a few examples of how to query it. The id field of this index is composed in this way: {shardID}{round}.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/scdeploys",
    //   name: "scdeploys.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the sc-deploys index , and also depicts a few examples of how to query it. The id field of this index is represented by a bech32 encoded smart contract address.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/scresults",
    //   name: "scresults.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the sc-results index , and also depicts a few examples of how to query it. The scresults index will be deprecated and removed in the near future.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/tags",
    //   name: "tags.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the tags index , and also depicts a few examples of how to query it. The id field of this index is represented by the tag name in a base64 encoding.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/tokens",
    //   name: "tokens.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the tokens index , and also depicts a few examples of how to query it. The id field of this index is represented by token identifier of an ESDT token.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/transactions",
    //   name: "sdk-and-tools-transactions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the transactions index , and also depicts a few examples of how to query it. The transactions index will be deprecated and removed in the near future.",
    // },
    // {
    //   uri: "sdk-and-tools/indices/validators",
    //   name: "validators.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the structure of the validators index , and also depicts a few examples of how to query it. The id field of this index is composed in this way: {shardID}{epoch}.",
    // },
    // {
    //   uri: "sdk-and-tools/mxjava",
    //   name: "mxjava.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX SDK for Java erdjava consists of Java helpers and utilities for interacting with the Blockchain. The source code can be found here: [mx-sdk-erdjava](.",
    // },
    // {
    //   uri: "sdk-and-tools/notifier",
    //   name: "notifier.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "A MultiversX observer node can push block events to a notifier service, which will process and forward the events to subscribers . This way, one can subscribe to a RabbitMQ.",
    // },
    // {
    //   uri: "sdk-and-tools/overview",
    //   name: "sdk-and-tools-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "One can interact with the MultiversX Network by leveraging the following SDKs, tools and APIs: Note that Rust is also the recommended programming language for writing Smart Contracts on MultiversX. That is, Rust can be used to write both on-chain software and off-chain software . For the on-chain part, please follow [Smart Contracts]. Here, we refer to the off-chain part.",
    // },
    // {
    //   uri: "sdk-and-tools/proxy",
    //   name: "proxy.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Overview of the MultiversX Proxy The MultiversX Proxy acts as an entry point into the MultiversX Network, through a set of Observer Nodes, and abstracts away the particularities and complexity of sharding.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/addresses",
    //   name: "addresses.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block This component of the REST API allows one to query information about Addresses .",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/blocks",
    //   name: "blocks.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block This component of the REST API allows one to query information about Blocks and Hyperblocks.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/gateway-overview",
    //   name: "gateway-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The MultiversX's Gateway REST API can be used by any application - dApp, desktop or server application - to interact with the Blockchain. The Gateway is backed by the [proxy] and the names Gateway or Proxy are often referred as the same thing.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/multiversx-api",
    //   name: "multiversx-api.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "api.multiversx.com is the public instance of MultiversX API and is a wrapper over gateway.multiversx.com that brings a robust caching mechanism, alongside Elasticsearch historical queries support, tokens media support, delegation & staking data, and many others.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/network",
    //   name: "network.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block This component of the REST API allows one to query information about the Network, such as network configuration and parameters.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/nodes",
    //   name: "nodes.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block This component of the REST API allows one to query information about Nodes within the Network .",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/rest-api",
    //   name: "rest-api.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX has 2 layers of REST APIs that can be publicly accessed. Both of them can be recreated by anyone that wants to have the same infrastructure, but self-hosted.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/transactions",
    //   name: "rest-api-transactions.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block This component of the REST API allows one to send Transactions to the Blockchain and query information about them.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/versions-and-changelog",
    //   name: "versions-and-changelog.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page offers a high level overview of the important releases of the MultiversX Proxy API, along with recommendations for API consumers. Documentation in this section is preliminary and subject to change.",
    // },
    // {
    //   uri: "sdk-and-tools/rest-api/virtual-machine",
    //   name: "virtual-machine.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block This component of the REST API allows one to call view functions of Smart Contracts, or, to put it in other words, to query values stored within contracts.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-dapp/internal-processes/guardians",
    //   name: "guardians.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The guardians feature adds an extra signing layer on top of transactions. This means that a guarded account will require a Guardian to sign the transaction before it can be executed. The differences between a guarded transaction and a simple transaction are the following:.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-dapp/sdk-dapp",
    //   name: "sdk-dapp.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Library used to build React dApps on MultiversX Network. The following documentation is for sdk-dapp v2.0.0 and above.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-go",
    //   name: "sdk-go.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "sdk-go consists of Go helpers and utilities for interacting with the Blockchain. The source code be found here: [mx-sdk-go](.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js-wallet-cli",
    //   name: "sdk-js-wallet-cli.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "CLI wrapper over sdk-js The CLI documentation can be found [here](.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/extending-sdk-js",
    //   name: "extending-sdk-js.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This tutorial will guide you through the process of extending and tailoring certain modules from sdk-js. Documentation in this section is preliminary and subject to change.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/migration-guides",
    //   name: "sdk-js-migration-guides.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page links to resources which are helpful in upgrading to newer versions of a sdk-js package. Make sure you have a look over the [cookbook], in advance.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/sdk-js-cookbook-v12",
    //   name: "sdk-js-cookbook-v12.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of handling common tasks using sdk-js v12 . A newer variant of the sdk-js cookbook is available [here].",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/sdk-js-cookbook-v13",
    //   name: "sdk-js-cookbook-v13.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of handling common tasks using sdk-js v13 . This cookbook makes use of sdk-js v13. In order to migrate from sdk-js v12.x to sdk-js v13, please also follow [the migration guide](.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/sdk-js-cookbook-versions",
    //   name: "sdk-js-cookbook-versions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page lists all available versions of the sdk-js cookbook. The cookbook version corresponds to the version of the [sdk-js-core]( package, even though other satellite packages of sdk-js have separate versioning.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/sdk-js-signing-providers",
    //   name: "sdk-js-signing-providers.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of integrating the sdk-js signing providers in a dApp which isn't based on sdk-dapp. Note that for most purposes, we recommend using [sdk-dapp]( instead of integrating the signing providers on your own.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/sdk-js",
    //   name: "sdk-js.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX SDK for TypeScript and JavaScript This SDK consists of TypeScript / JavaScript helpers and utilities for interacting with the Blockchain and with Smart Contracts .",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-js/writing-and-running-sdk-js-snippets",
    //   name: "writing-and-running-sdk-js-snippets.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Generally speaking, we recommended to use [sc-meta CLI] to [generate the boilerplate code for your contract interactions]. Though, for writing contract interaction snippets in JavaScript or TypeScript, please refer to the [sdk-js cookbook]. If you'd like these snippets to function as system tests of your contract, a choice would be to structure them as Mocha or Jest tests - take the .local.net.spec.ts tests in [mx-sdk-js-core] - if desired, you can shape them as simple scripts, as Python unit tests, or as Jupyter notebooks.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-nestjs/sdk-nestjs-auth",
    //   name: "sdk-nestjs-auth.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This package contains a set of utilities commonly used for authentication purposes in the MultiversX Microservice ecosystem. The package relies on [@multiversx/sdk-native-auth-server]( for validating access tokens signed by MultiversX wallets.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-nestjs/sdk-nestjs-cache",
    //   name: "sdk-nestjs-cache.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This package contains a set of utilities commonly used for caching purposes in the MultiversX Microservice ecosystem. sdk-nestjs-cache is delivered via npm and it can be installed as follows:.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-nestjs/sdk-nestjs-monitoring",
    //   name: "sdk-nestjs-monitoring.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This package contains a set of utilities commonly used for monitoring purposes in the MultiversX Microservice ecosystem. The package relies on Prometheus to aggregate the metrics, and it is using [prom-client]( as a client for it.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-nestjs/sdk-nestjs",
    //   name: "sdk-nestjs.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX NestJS Microservice Utilities sdk-nestjs contains a set of utilities commonly used in the MultiversX microservices ecosystem.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-py/installing-mxpy",
    //   name: "installing-mxpy.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes how to install mxpy . The recommended way to install mxpy is by using pipx. If you want to learn more about pipx you can check out [this page]].",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-py/migration-guides",
    //   name: "sdk-py-migration-guides.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page links to resources which are helpful in upgrading to newer versions of a sdk-py package or component, including mxpy. Make sure you have a look over the [cookbook], in advance.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-py/mxpy-cli",
    //   name: "mxpy-cli.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "mxpy, as a command-line tool, can be used to simplify and automate the interaction with the MultiversX network - it can be easily used in shell scripts, as well. It implements a set of commands, organized within groups. The complete Command Line Interface is listed [here]( Command usage and description are available through the --help or -h flags.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-py/sdk-py-cookbook-v0",
    //   name: "sdk-py-cookbook-v0.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of handling common tasks using the MultiversX Python SDK v0 . All examples depicted here are captured in [Jupyter notebooks](.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-py/sdk-py-cookbook-v1",
    //   name: "sdk-py-cookbook-v1.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of handling common tasks using the MultiversX Python SDK v1 . All examples depicted here are captured in [Jupyter notebooks](.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-py/sdk-py",
    //   name: "sdk-py.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX SDK for Python This SDK consists of a CLI tool, namely mxpy, and Python helpers and utilities for interacting with the Blockchain and with Smart Contracts .",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-py/smart-contract-interactions",
    //   name: "smart-contract-interactions.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Let's dive deeper into the Smart Contract interactions and what do you need to know when you need to interact with a SC. If you followed the previous mxpy related documentation, you should be able to set up your prerequisites like proxy URL, the chain ID and the PEM file. For this, we need an interactions file. Usually, we find this file inside the contract's folder, in an interaction folder. The interactions file usually has a suggestive name, related to which chain the setup has been done. For example: devnet.snippets.sh.",
    // },
    // {
    //   uri: "sdk-and-tools/sdk-rust",
    //   name: "sdk-rust.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The Rust SDK for interacting with the blockchain comes in the form of the so-called [Rust Interactors]. Since they use very similar syntax to smart contracts and smart contract tests, their documentation is grouped under the Rust Development Framework section.",
    // },
    // {
    //   uri: "sdk-and-tools/troubleshooting/ide-setup",
    //   name: "ide-setup.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The issues tackled on this page are related to IDEs preferred by MultiversX builders, such as VSCode or RustRover. If rust-analyzer is not working properly on VSCode, you might see the following error messages:.",
    // },
    // {
    //   uri: "sdk-and-tools/troubleshooting/multiplatform",
    //   name: "multiplatform.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Generally speaking, the MultiversX tools should work on all platforms. However, platform-specific issues can occur. This page aims to be an entry point for troubleshooting platform-specific issues, in regards to the MultiversX toolset. If you discover a platform-specific issue, please let us known, on the [corresponding GitHub repository].",
    // },
    // {
    //   uri: "sdk-and-tools/troubleshooting/rust-setup",
    //   name: "rust-setup.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "When encountering issues with your Rust installation, we recommend a cleanup first, especially if you have multiple installations . If you've installed Rust using your OS package manager:.",
    // },
    // {
    //   uri: "sdk-and-tools/troubleshooting/troubleshooting",
    //   name: "troubleshooting.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Here you can find some common issues and their solutions, in the context of [MultiversX SDKs and Tools]. 1. [Fix Rust installation].",
    // },
    // {
    //   uri: "sovereign/concept",
    //   name: "sovereign-concept.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This documentation is not complete. More content will be added once it is accepted and discussed on Agora or once it is implemented and available for production. The content created here is derived from:.",
    // },
    // {
    //   uri: "sovereign/custom-configurations",
    //   name: "custom-configurations.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The Sovereign Chain SDK is built with flexibility in mind, allowing you to tailor it to your specific needs. This page highlights various customizations you can apply to make your network unique. The OverridableConfigTomlValues will overwrite the parameters in the config files. Make sure that your new config parameters are not overwritten by this file.",
    // },
    // {
    //   uri: "sovereign/disclaimer",
    //   name: "disclaimer.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This is a living document. More content will be added as it is accepted and discussed on Agora, or once it is implemented and available for production. As this documentation evolves, some sections may be updated or modified to reflect the latest developments and best practices. Community feedback and contributions are encouraged to help improve and refine this guide. Please note that the information provided is subject to change and may not always reflect the latest updates in the technology or procedures. All information and changes will be communicated and discussed with the community. While MultiversX provides the chain sdk core code and scripts necessary to start a sovereign chain, it is important to note that the infrastructure for all aspects of sovereign setup is not provided. MultiversX focus is on delivering the tools and resources needed to launch and maintain a sovereign chains. However, users may need to describe the need for additional support or resources or for more specific or advanced requirements by using Agora forum or other support channels that are available for them to use.",
    // },
    // {
    //   uri: "sovereign/distributed-setup",
    //   name: "distributed-setup.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This guide will help you deploy a public Sovereign Chain with real validators, enabling a truly decentralized setup. At its core, blockchain technology—and Sovereign Chains in particular—are designed to operate in a decentralized manner, powered by multiple independent validators. This ensures transparency, security, and resilience, as no single entity has control over the entire system. Unlike other guides we’ve provided, which focus on local setups, this solution emphasizes decentralization by involving multiple stakeholders in the validation process. By following the steps below, the owner can create the Sovereign Chain configuration for the network: Before proceeding, ensure that a SSH key for GitHub is configured on your machine.",
    // },
    // {
    //   uri: "sovereign/interoperability",
    //   name: "interoperability.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Sovereign Chains are designed to serve as an interoperability layer between different ecosystems. Ecosystem partners and builders have the opportunity to create a set of components that can be activated or deactivated based on the specific needs of a particular Sovereign Chain. But how will sovereign chains achieve that? SpaceVM has two parts, developed in GO and Rust:.",
    // },
    // {
    //   uri: "sovereign/key-components",
    //   name: "key-components.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This documentation is not complete. More content will be added once it is accepted and discussed on Agora or once it is implemented and available for production. Sovereign Chains mark significant progress for MultiversX in the field of appchains. While the concept is straightforward to discuss in general terms, developers, builders, or other entities looking to launch a sovereign chain need to consider several critical components. For clarity, we will divide these components into four major categories and describe the importance and role of each one.",
    // },
    // {
    //   uri: "sovereign/local-setup",
    //   name: "local-setup.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This guide will help you deploy a full sovereign local network connected to MultiversX network. This includes all the smart contracts and dependent services needed. Follow these steps carefully to ensure a successful deployment. Before proceeding, ensure that a SSH key for GitHub is configured on your machine.",
    // },
    // {
    //   uri: "sovereign/one-click-deployment",
    //   name: "one-click-deployment.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "At present, the only one-click deployment option is available on the Digital Ocean marketplace. This solution sets up a droplet containing a local Sovereign Chain connected to the MultiversX public testnet, complete with all essential services such as API, wallet, explorer, and more. It is recommended to choose a droplet with minimum 8 CPUs and 32GB RAM for the best performance.",
    // },
    // {
    //   uri: "sovereign/overview",
    //   name: "sovereign-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This documentation is not complete. More content will be added once it is accepted and discussed on Agora or once it is implemented and available for production. This guide provides detailed instructions on setting up, deploying, and managing a sovereign chain, along with covering various other educational topics.",
    // },
    // {
    //   uri: "sovereign/restaking",
    //   name: "restaking.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "In the blockchain space, reStaking products are emerging as a significant innovation. Eigenlayer is currently the leading platform, but new projects are continuously entering the Ethereum ecosystem with impressive valuations. Currently, over $13 billion is reStaked in Eigenlayer, despite the absence of a live product. When designing the General Economics for Sovereign Chains, extensive research was conducted on various economic and staking models. This included insights from IBC , the new Interchain Security model, Polygon SuperChains, Avalanche Appchains, various Ethereum Layer 2 solutions, and Eigenlayer. Each model was analyzed, incorporating the best features and discarding the less effective ones.",
    // },
    // {
    //   uri: "sovereign/services",
    //   name: "services.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The Sovereign API is a wrapper over the Sovereign Proxy that brings a robust caching mechanism, alongside Elasticsearch historical queries support, tokens media support, delegation & staking data, and many others. The Sovereign Lite Extras API includes a faucet service that allows users to obtain test tokens for their wallet.",
    // },
    // {
    //   uri: "sovereign/software-dependencies",
    //   name: "software-dependencies.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Understanding and managing software dependencies is crucial for the successful deployment and maintenance of Sovereign Chains. Dependencies ensure that all components of your blockchain network work seamlessly together. This page outlines the key dependencies required for building and operating Sovereign Chains, including software libraries, frameworks, and tools. Below is the list of software needed to deploy a local Sovereign Chain. All the software dependencies will be installed by scripts in [Setup Guide].",
    // },
    // {
    //   uri: "sovereign/sovereign-api",
    //   name: "sovereign-api.md",
    //   mimeType: "text/markdown",
    //   description: "1. Clone the GitHub repository: bash git clone.",
    // },
    // {
    //   uri: "sovereign/standalone-evm",
    //   name: "standalone-evm.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "In the early stages of the MultiversX VM development, there were already components built specifically for EVM compatibility. We are revisiting and reusing parts of that code. In VM1.2, for instance, there was a direct correspondence between EVM opcodes and the BlockchainHook interface, as well as a mechanism that wrapped MvX-style transaction data into EVM-specific vmInput. The MultiversX protocol defines a VMExecutionHandlerInterface with the following functions:.",
    // },
    // {
    //   uri: "sovereign/system-requirements",
    //   name: "sovereign-system-requirements.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This is a living document. More content will be added once it is implemented and available for production. As this documentation evolves, some sections may be updated or modified to reflect the latest developments and best practices. Community feedback and contributions are encouraged to help improve and refine this guide. Please note that the information provided is subject to change and may not always reflect the latest updates in the technology or procedures. s This page outlines the recommended system requirements for running a Sovereign Chain node.",
    // },
    // {
    //   uri: "sovereign/token-economics",
    //   name: "token-economics.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Sovereign Chains represent an important step forward for MultiversX ecosystem, allowing each chain to operate independently with its own set of rules, governance, and most importantly, its own token economy . Unlike traditional blockchain models where a single token often dominates, Sovereign Chains enable the creation and management of unique tokens tailored to the specific needs and goals of each chain. One of the core benefits of Sovereign Chains is the flexibility in designing token economies. Each Sovereign Chain can develop a token that aligns perfectly with its specific use case, community, and economic model. This allows for a highly customized approach to incentivizing behavior, securing the network, and ensuring the long-term sustainability of the chain.",
    // },
    // {
    //   uri: "sovereign/token-management",
    //   name: "token-management.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "1. Navigate to /mx-chain-go/scripts/testnet/sovereignBridge. Update the configuration file config/configs.cfg with the token settings you prefer. Example:.",
    // },
    // {
    //   uri: "sovereign/vm-intro",
    //   name: "vm-intro.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The MultiversX protocol is designed so that integrating a new executor, a new processor, or even a completely new VM is straightforward. In essence, any new VM only needs to implement the VMExecutionHandler interface. Currently, there are two VMs running on MultiversX: For sovereign shards, we introduced the option for a WasmVM smart contract to call a systemVM smart contract through the BlockchainHookInterface, specifically via the ExecuteOnDestOnOtherVM endpoint. This is necessary because both VMs reside in the same shard on sovereign shards. On the mainnet, however, WasmVM contracts can interact with systemVM contracts only through an asynchronous call, since systemVM exists exclusively on the metachain.",
    // },
    // {
    //   uri: "tokens/fungible-tokens",
    //   name: "fungible-tokens.mdx",
    //   mimeType: "text/mdx",
    //   description: "mdx-code-block ESDT stands for eStandard Digital Token.",
    // },
    // {
    //   uri: "tokens/intro",
    //   name: "intro.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Fungible tokens, such as cryptocurrencies, are interchangeable and have the same value as other tokens of the same type. Non-fungible tokens are unique digital assets that are assigned unique identification codes and metadata, making them one-of-a-kind. Semi-fungible tokens are a combination of the two, offering both interchangeable and unique properties. For us they are ESDTs. With ESDTs, you can take advantage of the security, transparency, and versatility of MultiversX blockchain technology to manage and transfer your assets.",
    // },
    // {
    //   uri: "tokens/nft-tokens",
    //   name: "nft-tokens.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block MultiversX NFTs are a breed of digital assets that are revolutionizing the world of art, collectibles, and more. These NFTs are unique, one-of-a-kind tokens that are built on blockchain technology, allowing for secure ownership and transfer of these assets. With MultiversX NFTs, every token is assigned a unique identification code and metadata that distinguishes it from every other token, making each NFT truly one-of-a-kind. Read the full page for a comprehensive guide on how to brand, issue, transfer, assign roles and many other features, for both NFTs and SFTs.",
    // },
    // {
    //   uri: "utils",
    //   name: "utils.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "Example text with nothing specific bold text italicized text.",
    // },
    // {
    //   uri: "validators/delegation-dashboard",
    //   name: "delegation-dashboard.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the delegation dashboard, which is a tool that allows you to manage your delegation smart contract in a visual and user-friendly way. Delegation Manager Dashboard is an open-source intuitive interface that anyone can deploy to engage their customers, partners, or friends and operate MultiversX Validator nodes.",
    // },
    // {
    //   uri: "validators/delegation-manager",
    //   name: "delegation-manager.mdx",
    //   mimeType: "text/mdx",
    //   description:
    //     "mdx-code-block A staking provider is defined as a custom delegation smart contract, the associated nodes and the funds staked in the pool by participants. Node operators may wish to set up a staking provider for their nodes, which can then be funded by anyone in exchange for a proportion of the validator rewards. This form of funding the stake for validators is called delegation.",
    // },
    // {
    //   uri: "validators/faq",
    //   name: "validators-faq.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page contains frequently asked questions about validators and nodes. How to choose a VPS?",
    // },
    // {
    //   uri: "validators/import-db",
    //   name: "import-db.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of starting a node in import-db mode, allowing the reprocessing of older transactions. The node is able to reprocess a previously produced database by providing the database and starting.",
    // },
    // {
    //   uri: "validators/key-management/multikey-nodes",
    //   name: "multikey-nodes.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page contains information about how to manage multiple keys on a group of nodes. Since the mainnet launch, and up until the release candidate RC/v1.6.0, each node could have managed only.",
    // },
    // {
    //   uri: "validators/key-management/protect-keys",
    //   name: "protect-keys.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page contains information about how to protect your validator and wallet keys. Validator Keys are very sensitive:.",
    // },
    // {
    //   uri: "validators/key-management/validator-keys",
    //   name: "validator-keys.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Each validator required a private key to be used for signing blocks. This key is called the Validator Key. The Validator Key is also used to sign the consensus messages that the validator sends to the other validators.",
    // },
    // {
    //   uri: "validators/key-management/wallet-keys",
    //   name: "wallet-keys.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page describes the wallet keys, that are used for staking and managing nodes. As a Validator you use the Wallet Keys to access the address from which you send the staking transaction. Your EGLD holdings leave this address and are deposited into a staking smart contract. Rewards are sent to this address. You can change it later on by using a changeRewards transaction.",
    // },
    // {
    //   uri: "validators/mainnet/config-scripts",
    //   name: "validators-mainnet-config-scripts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This section is deprecated. We are now using the elrond-go-scripts unified script repo. Check this section [Install a Mainnet/Testnet/Devnet Node] instead.",
    // },
    // {
    //   uri: "validators/mainnet/install-update",
    //   name: "validators-mainnet-install-update.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This section is deprecated. We are now using the elrond-go-scripts unified script repo. Check this section [Install a Mainnet/Testnet/Devnet Node] instead.",
    // },
    // {
    //   uri: "validators/mainnet/optional-configs",
    //   name: "optional-configs.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This section is deprecated. We are now using the elrond-go-scripts unified script repo. Check this section [Install a Mainnet/Testnet/Devnet Node] instead.",
    // },
    // {
    //   uri: "validators/mainnet/use-docker",
    //   name: "validators-mainnet-use-docker.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This section is deprecated. We are now using the elrond-go-scripts unified script repo. Check this section [Install a Mainnet/Testnet/Devnet Node] instead.",
    // },
    // {
    //   uri: "validators/node-cli",
    //   name: "node-cli.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the CLI fields available for the node and other tools from the mx-chain-go repository. Command Line Interface for the Node and the associated Tools.",
    // },
    // {
    //   uri: "validators/node-configuration",
    //   name: "node-configuration.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The node relies on some configuration files that are meant to allow the node operator to easily change some values that won't require a code change, a new release, or so on.",
    // },
    // {
    //   uri: "validators/node-databases",
    //   name: "node-databases.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will describe the databases used by the Node. These are simple key-value storage units that will hold different types of data, as described below. Nodes use simple Key-Value type databases.",
    // },
    // {
    //   uri: "validators/node-upgrades",
    //   name: "node-upgrades.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "As opposed to a hard fork, which is a change in the protocol that is not backward compatible, MultiversX performs regular node upgrades, which are changes in the protocol that are backward compatible and bring new features, improvements and bugs fixes. Nodes operators must be aware of the upgrade process and the steps they need to take in order.",
    // },
    // {
    //   uri: "validators/nodes-scripts/config-scripts",
    //   name: "validators-nodes-scripts-config-scripts.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX provides scripts designed to streamline the process of installing a MultiversX node. This validator script is a general script for accessing the Mainnet, Devnet and Testnet networks. To get started, you will begin by getting a copy of the latest version of the scripts from Github and configure it to match your local setup.",
    // },
    // {
    //   uri: "validators/nodes-scripts/install-update",
    //   name: "validators-nodes-scripts-install-update.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of installing and updating a validator node. After preparing the user permissions, the script configurations, and the keys, the actual node installation can begin. The Validator script is a multi-purpose tool for managing your node, it is accessible to Mainnet, Devnet or Testnet.",
    // },
    // {
    //   uri: "validators/nodes-scripts/manage-node",
    //   name: "manage-node.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Your node will start as an observer. In order to make it into a validator, you will need to have 2500 xEGLD tokens. You can reach out to an admin in our [Telegram community]( who will gladly help. Follow these steps to manage your validator node.",
    // },
    // {
    //   uri: "validators/nodes-scripts/use-docker",
    //   name: "validators-nodes-scripts-use-docker.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of using the Docker image to run a MultiversX node. As an alternative to the recommended installation flow, one could choose to run a MultiversX Node using the official Docker images: [here](.",
    // },
    // {
    //   uri: "validators/operation-modes",
    //   name: "operation-modes.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Without configuration changes, nodes will start by using the default settings. However, there are several ways to configure the node, depending on the desired operation mode. Instead of manually editing the toml files, you can use the --operation-mode CLI flag described below to specify a custom.",
    // },
    // {
    //   uri: "validators/overview",
    //   name: "validators-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page provides an overview of the Validator Nodes and the associated Tools. | Name | Description |.",
    // },
    // {
    //   uri: "validators/rating",
    //   name: "validators-rating.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page exposes the rating system used for MultiversX validators. Each individual validator has a rating score, which expresses its overall reliability, performance and responsiveness. It is an important value, and node operators should be always mindful of the rating of their validators.",
    // },
    // {
    //   uri: "validators/redundancy",
    //   name: "redundancy.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "MultiversX Validator Nodes can be configured to have one or more hot-standby nodes. This means additional nodes will run on different servers, in sync with the Main Validator node.",
    // },
    // {
    //   uri: "validators/staking-v4",
    //   name: "staking-v4.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Staking and delegation are processes that evolve over time. No system has to remain static. Our assumptions about how the market works and reacts can change, just as user behavior and market dynamics may evolve. Currently, we have.",
    // },
    // {
    //   uri: "validators/staking/convert-existing-validator-into-staking-provider",
    //   name: "convert-existing-validator-into-staking-provider.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Staking Phase 3.5 introduced the ability for an existing Validator to create a new delegation smart contract and have their validator node added in the delegation smart contract directly. This is different from before, when in order to do this, a Validator node was to be unstaked, and then placed at the back of the queue. With Staking Phase 3.5, Validators can retain the place inside the 3,200 Validator nodes, and start accepting non-custodial delegations. 1. Create a new Delegation Smart Contract for an Existing Validator.",
    // },
    // {
    //   uri: "validators/staking/merge-validator-delegation-sc",
    //   name: "merge-validator-delegation-sc.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Introduced in Staking Phase 3.5, the ability of merging one or more existing standalone validator node into a staking provider gives more flexibility for staking provider operators. There are two steps required for this action: The owner of the Delegation SC has to whitelist the wallet from which the Merging Validator was staked from. Then the Merging Validator has to send the merge transaction from the whitelisted wallet.",
    // },
    // {
    //   uri: "validators/staking/staking-smart-contract",
    //   name: "staking-smart-contract.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the the operations of the Staking System Smart Contract. Nodes are promoted to the role of validator when their operator sends a staking transaction to the Staking smart contract. Through this transaction, the operator locks an amount of their own EGLD for each node that becomes a validator. A single staking transaction contains the EGLD and the information needed to stake for one or more nodes. Such a transaction contains the following:.",
    // },
    // {
    //   uri: "validators/staking/staking",
    //   name: "staking.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of staking and unstaking nodes. Before staking, a node is a mere observer. After staking, the node becomes a validator, which means that it will be eligible for consensus and will earn rewards. Validators play a central role in the operation of the network.",
    // },
    // {
    //   uri: "validators/staking/unjailing",
    //   name: "unjailing.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page will guide you through the process of unjailing a validator node. In the unfortunate situation of losing too much rating score, a validator will be jailed, which means that they will be taken out of the shards, they will not participate in consensus, and thus they will not earn any more rewards. Currently, the rating limit at which a node will be jailed is 10. Read more on the [Ratings] page.",
    // },
    // {
    //   uri: "validators/system-requirements",
    //   name: "validators-system-requirements.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page provides the system requirements for running a MultiversX node. Nodes are computers running the MultiversX software, so they contribute to the MultiversX network by relaying information and validating it. Each node needs to stake 2500 EGLD to become a Validator and is rewarded for its service. Nodes without a stake are called Observers - they are connected to the network and relay information, but they have no role in processing transactions and thus do not earn rewards.",
    // },
    // {
    //   uri: "validators/useful-links-tools",
    //   name: "useful-links-tools.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "This page offer useful links and resources that can be used by validators and nodes operators. Official resources:.",
    // },
    // {
    //   uri: "wallet/keystore",
    //   name: "keystore.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "The MultiversX keystore is a JSON file that holds a mnemonic , encrypted with a password . Thus, the keystore provides users with a reliable and convenient method for managing their hot wallets and protecting their assets. Choose connecting with keystore:.",
    // },
    // {
    //   uri: "wallet/ledger",
    //   name: "ledger.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "You can safely store your EGLD by installing the MultiversX EGLD app on your Ledger Nano S or Ledger Nano X device. We recommend using a hardware wallet for managing large amounts of EGLD. 1. [Set up]( your Ledger device.",
    // },
    // {
    //   uri: "wallet/overview",
    //   name: "wallet-overview.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Wallets give access to your funds and MultiversX applications. Only you should have access to your wallet. The private key associated to an address needs to be stored in a specific format. In order to use that private.",
    // },
    // {
    //   uri: "wallet/wallet-extension",
    //   name: "wallet-extension.md",
    //   mimeType: "text/markdown",
    //   description:
    //     'Popularly referred to as the "future of money," MultiversX currently has a robust web wallet extension known as the MultiversX DeFi Wallet. It is a powerful browser extension for the MultiversX Wallet that effectively automates and reduces the steps and time required for users to interact with MultiversX Decentralized apps. The MultiversX DeFi Wallet can be installed on Firefox, Chrome, Brave, and other chromium-based browsers. This extension is free and secure, with compelling features that allow you to create a new wallet or import existing wallets, manage multiple wallets on the MultiversX mainnet, and store MultiversX tokens such as EGLD, ESDT, or NFTs on the MultiversX Network with easy accessibility.',
    // },
    // {
    //   uri: "wallet/wallet-token",
    //   name: "wallet-token.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "ESDT stands for eStandard Digital Token. MultiversX network natively supports the issuance of custom tokens, without the need for contracts such as ERC20, but addressing the same use cases.",
    // },
    // {
    //   uri: "wallet/web-wallet",
    //   name: "web-wallet.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Use the wallet to send, receive and store EGLD in a secure manner. Includes automations for interacting with staking products and ecosystem pools. You can log in on the Web Wallet using a keystore file, using the xPortal App, using a Ledger device or a pem file. For now, we are going to create a keystore wallet and connect on the Web Wallet using it.",
    // },
    // {
    //   uri: "wallet/webhooks",
    //   name: "webhooks.md",
    //   mimeType: "text/markdown",
    //   description:
    //     'The web wallet webhooks allow you to build or setup integrations for dapps or payment flows. The web wallet webhooks are links that point the user of the wallet to either login or populate a "send transaction" form with the provided arguments. Once the action is performed, the user is redirected to the provided callback URL along with a success or error status.',
    // },
    // {
    //   uri: "wallet/xalias",
    //   name: "xalias.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "xAlias is a single sign-on solution for Web3, powered by Google Sign-In . It allows new users to quickly and easily create blockchain wallets , then start right away and interact with MultiversX dApps. It's a self-custody wallet, and it's convertible to a conventional Web3 wallet at a later point.",
    // },
    // {
    //   uri: "wallet/xportal",
    //   name: "xportal.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Experience the power of convenience and security in one place. Built by MultiversX, [xPortal]( is the go-to app for all crypto needs. Securely store your cryptocurrencies and NFTs, effortlessly swap tokens, and soon, enjoy the perks of our upcoming debit cards with exciting cashback rewards. Join millions of users who trust xPortal for seamless finance management, gamified missions & AI avatar creation, global payments, and a social experience like no other. On this page, we will start presenting features from xPortal, beginning with the Invisible Guardians feature. Subsequently, we will introduce other features in the following sections.",
    // },
    // {
    //   uri: "welcome/terminology",
    //   name: "terminology.md",
    //   mimeType: "text/markdown",
    //   description:
    //     "Metachain: the blockchain that runs in a special shard, where the main responsibilities are not processing transactions, but notarizing and finalizing the processed shard block headers.",
    // },
];
