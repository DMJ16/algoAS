import { Node } from "./Node";

export function mergeTwoSortedLists(
  list1: Node<i32> | null,
  list2: Node<i32> | null
): Node<i32> | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoSortedLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoSortedLists(list1, list2.next);
    return list2;
  }
}
