import fs from "fs";
const imports = {
  /* imports go here */
};
const wasmModule = loader.instantiateSync(
  fs.readFileSync(__dirname + "/build/optimized.wasm"),
  imports
);
export default wasmModule.exports;

// import { MerkleTree, createHash } from "@guildofweavers/merkle";

// const values = [
//   Buffer.from("a"),
//   Buffer.from("b"),
//   Buffer.from("c"),
//   Buffer.from("d"),
// ];

// const hash = createHash("sha256");
// const tree = MerkleTree.create(values, hash);

// const proof = tree.prove(1);
// console.log(proof[0].toString());

// const result = MerkleTree.verify(tree.root, 1, proof, hash);
// console.log(result);
