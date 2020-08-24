import { MerkleTree, createHash } from "@guildofweavers/merkle";

const values = [
  Buffer.from("a"),
  Buffer.from("b"),
  Buffer.from("c"),
  Buffer.from("d"),
];

const hash = createHash("sha256");
const tree = MerkleTree.create(values, hash);

const proof = tree.prove(1);
console.log(proof[0].toString());

const result = MerkleTree.verify(tree.root, 1, proof, hash);
console.log(result);
