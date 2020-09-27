(module
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $f64_f64_=>_i32 (func (param f64 f64) (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (import "wasi_snapshot_preview1" "fd_write" (func $~lib/bindings/wasi_snapshot_preview1/fd_write (param i32 i32 i32 i32) (result i32)))
 (import "wasi_snapshot_preview1" "proc_exit" (func $~lib/bindings/wasi_snapshot_preview1/proc_exit (param i32)))
 (memory $0 1)
 (data (i32.const 1028) "\01")
 (data (i32.const 1040) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s")
 (data (i32.const 1088) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s")
 (data (i32.const 1136) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e")
 (data (i32.const 1204) "\01")
 (data (i32.const 1216) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h")
 (data (i32.const 1264) "\1a\00\00\00\01\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s")
 (data (i32.const 1316) "\01\00\00\00\01")
 (data (i32.const 1328) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e")
 (data (i32.const 1392) "^\00\00\00\01\00\00\00\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y")
 (data (i32.const 1504) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00 ")
 (data (i32.const 1536) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00.")
 (data (i32.const 1568) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\" ")
 (data (i32.const 1600) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00*")
 (data (i32.const 1632) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00+")
 (data (i32.const 1664) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00x")
 (data (i32.const 1696) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00$")
 (data (i32.const 1728) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00#")
 (data (i32.const 1760) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00%")
 (data (i32.const 1792) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00n\00u\00l\00l")
 (data (i32.const 1924) "\01")
 (data (i32.const 1940) "\01")
 (data (i32.const 1952) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00>")
 (data (i32.const 1984) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00v")
 (data (i32.const 2016) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00<")
 (data (i32.const 2048) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00^")
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~lib/rt/tlsf/collectLock (mut i32) (i32.const 0))
 (global $~started (mut i32) (i32.const 0))
 (export "_start" (func $~start))
 (export "memory" (memory $0))
 (func $~lib/rt/pure/__retain (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 2068
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   local.tee $1
   i32.load offset=4
   local.tee $2
   i32.const -268435456
   i32.and
   local.get $2
   i32.const 1
   i32.add
   i32.const -268435456
   i32.and
   i32.ne
   if
    i32.const 0
    i32.const 1056
    i32.const 109
    i32.const 3
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $1
   local.get $2
   i32.const 1
   i32.add
   i32.store offset=4
   local.get $1
   i32.load
   i32.const 1
   i32.and
   if
    i32.const 0
    i32.const 1056
    i32.const 112
    i32.const 14
    call $~lib/wasi/index/abort
    unreachable
   end
  end
  local.get $0
 )
 (func $~lib/string/String#get:length (param $0 i32) (result i32)
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.const 1
  i32.shr_u
 )
 (func $~lib/string/String.UTF8.encodeUnsafe (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $4
  local.get $2
  local.set $1
  loop $while-continue|0
   local.get $0
   local.get $4
   i32.lt_u
   if
    local.get $0
    i32.load16_u
    local.tee $3
    i32.const 128
    i32.lt_u
    if (result i32)
     local.get $1
     local.get $3
     i32.store8
     local.get $1
     i32.const 1
     i32.add
    else
     local.get $3
     i32.const 2048
     i32.lt_u
     if (result i32)
      local.get $1
      local.get $3
      i32.const 6
      i32.shr_u
      i32.const 192
      i32.or
      local.get $3
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.const 8
      i32.shl
      i32.or
      i32.store16
      local.get $1
      i32.const 2
      i32.add
     else
      local.get $0
      i32.const 2
      i32.add
      local.get $4
      i32.lt_u
      i32.const 0
      local.get $3
      i32.const 64512
      i32.and
      i32.const 55296
      i32.eq
      select
      if
       local.get $0
       i32.load16_u offset=2
       local.tee $5
       i32.const 64512
       i32.and
       i32.const 56320
       i32.eq
       if
        local.get $1
        local.get $3
        i32.const 1023
        i32.and
        i32.const 10
        i32.shl
        i32.const 65536
        i32.add
        local.get $5
        i32.const 1023
        i32.and
        i32.or
        local.tee $3
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.const 24
        i32.shl
        local.get $3
        i32.const 6
        i32.shr_u
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.const 16
        i32.shl
        i32.or
        local.get $3
        i32.const 12
        i32.shr_u
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.const 8
        i32.shl
        i32.or
        local.get $3
        i32.const 18
        i32.shr_u
        i32.const 240
        i32.or
        i32.or
        i32.store
        local.get $1
        i32.const 4
        i32.add
        local.set $1
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      local.get $1
      local.get $3
      i32.const 12
      i32.shr_u
      i32.const 224
      i32.or
      local.get $3
      i32.const 6
      i32.shr_u
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.const 8
      i32.shl
      i32.or
      i32.store16
      local.get $1
      local.get $3
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.store8 offset=2
      local.get $1
      i32.const 3
      i32.add
     end
    end
    local.set $1
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    br $while-continue|0
   end
  end
  local.get $1
  local.get $2
  i32.sub
 )
 (func $~lib/util/number/decimalCount32 (param $0 i32) (result i32)
  local.get $0
  i32.const 10
  i32.ge_u
  i32.const 1
  i32.add
  local.get $0
  i32.const 10000
  i32.ge_u
  i32.const 3
  i32.add
  local.get $0
  i32.const 1000
  i32.ge_u
  i32.add
  local.get $0
  i32.const 100
  i32.lt_u
  select
  local.get $0
  i32.const 1000000
  i32.ge_u
  i32.const 6
  i32.add
  local.get $0
  i32.const 1000000000
  i32.ge_u
  i32.const 8
  i32.add
  local.get $0
  i32.const 100000000
  i32.ge_u
  i32.add
  local.get $0
  i32.const 10000000
  i32.lt_u
  select
  local.get $0
  i32.const 100000
  i32.lt_u
  select
 )
 (func $~lib/rt/pure/__release (param $0 i32)
  local.get $0
  i32.const 2068
  i32.gt_u
  if
   local.get $0
   i32.const 16
   i32.sub
   call $~lib/rt/pure/decrement
  end
 )
 (func $~lib/wasi/index/abort (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $5
  i32.const 0
  i32.const 12
  i32.store
  i32.const 12
  i64.const 9071471065260641
  i64.store
  local.get $4
  if (result i32)
   local.get $4
   local.get $4
   call $~lib/string/String#get:length
   i32.const 19
   call $~lib/string/String.UTF8.encodeUnsafe
   i32.const 19
   i32.add
  else
   i32.const 19
  end
  local.tee $1
  i32.const 544106784
  i32.store
  local.get $1
  i32.const 4
  i32.add
  local.set $1
  local.get $5
  if
   local.get $5
   local.get $5
   call $~lib/string/String#get:length
   local.get $1
   call $~lib/string/String.UTF8.encodeUnsafe
   local.get $1
   i32.add
   local.set $1
  end
  local.get $1
  i32.const 40
  i32.store8
  local.get $2
  call $~lib/util/number/decimalCount32
  local.tee $6
  local.get $1
  i32.const 1
  i32.add
  i32.add
  local.set $1
  loop $do-continue|0
   local.get $2
   i32.const 10
   i32.div_u
   local.get $1
   i32.const 1
   i32.sub
   local.tee $1
   local.get $2
   i32.const 10
   i32.rem_u
   i32.const 48
   i32.add
   i32.store8
   local.tee $2
   br_if $do-continue|0
  end
  local.get $1
  local.get $6
  i32.add
  local.tee $0
  i32.const 58
  i32.store8
  local.get $3
  call $~lib/util/number/decimalCount32
  local.tee $2
  local.get $0
  i32.const 1
  i32.add
  i32.add
  local.set $1
  loop $do-continue|1
   local.get $3
   i32.const 10
   i32.div_u
   local.get $1
   i32.const 1
   i32.sub
   local.tee $1
   local.get $3
   i32.const 10
   i32.rem_u
   i32.const 48
   i32.add
   i32.store8
   local.tee $3
   br_if $do-continue|1
  end
  local.get $1
  local.get $2
  i32.add
  local.tee $0
  i32.const 2601
  i32.store16
  i32.const 4
  local.get $0
  i32.const -10
  i32.add
  i32.store
  i32.const 2
  i32.const 0
  i32.const 1
  i32.const 8
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  drop
  i32.const 255
  call $~lib/bindings/wasi_snapshot_preview1/proc_exit
  local.get $4
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
 )
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 277
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 1073741808
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 16
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 279
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 292
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.load offset=20
  local.set $4
  local.get $1
  i32.load offset=16
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=20
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=16
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const 1
    local.get $2
    i32.shl
    i32.const -1
    i32.xor
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const 1
     local.get $3
     i32.shl
     i32.const -1
     i32.xor
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 205
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $4
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 207
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 16
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $5
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $4
   i32.const -4
   i32.and
   i32.const 16
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.const 1073741808
   i32.lt_u
   if
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    local.get $4
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $1
    i32.const 16
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $5
    i32.load
    local.set $2
   end
  end
  local.get $4
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $3
   i32.load
   local.tee $7
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1104
    i32.const 228
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $7
   i32.const -4
   i32.and
   i32.const 16
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $8
   i32.const 1073741808
   i32.lt_u
   if (result i32)
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    local.get $8
    local.get $7
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $3
   else
    local.get $1
   end
   local.set $1
  end
  local.get $5
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const -4
  i32.and
  local.tee $3
  i32.const 1073741808
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 16
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 243
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  local.get $1
  i32.const 16
  i32.add
  i32.add
  local.get $5
  i32.ne
  if
   i32.const 0
   i32.const 1104
   i32.const 244
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $5
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $4
   i32.const 7
   i32.sub
   local.set $6
  end
  local.get $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $6
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 260
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  local.get $4
  i32.store offset=20
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=16
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $6
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $2
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $1
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $1
  local.get $2
  i32.le_u
  select
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 386
   i32.const 5
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=1568
  local.tee $3
  if
   local.get $1
   local.get $3
   i32.const 16
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1104
    i32.const 396
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $3
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $3
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1104
    i32.const 408
    i32.const 5
    call $~lib/wasi/index/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.sub
  local.tee $2
  i32.const 48
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 32
  i32.sub
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=16
  local.get $1
  i32.const 0
  i32.store offset=20
  local.get $1
  local.get $2
  i32.add
  i32.const 16
  i32.sub
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/maybeInitialize (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  global.get $~lib/rt/tlsf/ROOT
  local.tee $1
  i32.eqz
  if
   i32.const 1
   memory.size
   local.tee $1
   i32.gt_s
   if (result i32)
    i32.const 1
    local.get $1
    i32.sub
    memory.grow
    i32.const 0
    i32.lt_s
   else
    i32.const 0
   end
   if
    unreachable
   end
   i32.const 2080
   local.set $1
   i32.const 2080
   i32.const 0
   i32.store
   i32.const 3648
   i32.const 0
   i32.store
   loop $for-loop|0
    local.get $0
    i32.const 23
    i32.lt_u
    if
     local.get $0
     i32.const 2
     i32.shl
     i32.const 2080
     i32.add
     i32.const 0
     i32.store offset=4
     i32.const 0
     local.set $2
     loop $for-loop|1
      local.get $2
      i32.const 16
      i32.lt_u
      if
       local.get $2
       local.get $0
       i32.const 4
       i32.shl
       i32.add
       i32.const 2
       i32.shl
       i32.const 2080
       i32.add
       i32.const 0
       i32.store offset=96
       local.get $2
       i32.const 1
       i32.add
       local.set $2
       br $for-loop|1
      end
     end
     local.get $0
     i32.const 1
     i32.add
     local.set $0
     br $for-loop|0
    end
   end
   i32.const 2080
   i32.const 3664
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   i32.const 2080
   global.set $~lib/rt/tlsf/ROOT
  end
  local.get $1
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741808
  i32.ge_u
  if
   i32.const 1152
   i32.const 1104
   i32.const 461
   i32.const 30
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.const 15
  i32.add
  i32.const -16
  i32.and
  local.tee $0
  i32.const 16
  local.get $0
  i32.const 16
  i32.gt_u
  select
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870904
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.set $2
   local.get $1
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1104
   i32.const 338
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1104
     i32.const 351
     i32.const 18
     call $~lib/wasi/index/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1104
   i32.const 365
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 32
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $2
   local.get $1
   i32.const 16
   i32.add
   i32.add
   local.tee $1
   local.get $4
   i32.const 16
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 16
   i32.add
   local.tee $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  global.get $~lib/rt/tlsf/collectLock
  if
   i32.const 0
   i32.const 1104
   i32.const 500
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.tee $4
  call $~lib/rt/tlsf/searchBlock
  local.tee $3
  i32.eqz
  if
   i32.const 1
   global.set $~lib/rt/tlsf/collectLock
   i32.const 0
   global.set $~lib/rt/tlsf/collectLock
   local.get $0
   local.get $4
   call $~lib/rt/tlsf/searchBlock
   local.tee $3
   i32.eqz
   if
    i32.const 16
    memory.size
    local.tee $3
    i32.const 16
    i32.shl
    i32.const 16
    i32.sub
    local.get $0
    i32.load offset=1568
    i32.ne
    i32.shl
    local.get $4
    i32.const 1
    i32.const 27
    local.get $4
    i32.clz
    i32.sub
    i32.shl
    i32.const 1
    i32.sub
    i32.add
    local.get $4
    local.get $4
    i32.const 536870904
    i32.lt_u
    select
    i32.add
    i32.const 65535
    i32.add
    i32.const -65536
    i32.and
    i32.const 16
    i32.shr_u
    local.set $5
    local.get $3
    local.get $5
    local.get $3
    local.get $5
    i32.gt_s
    select
    memory.grow
    i32.const 0
    i32.lt_s
    if
     local.get $5
     memory.grow
     i32.const 0
     i32.lt_s
     if
      unreachable
     end
    end
    local.get $0
    local.get $3
    i32.const 16
    i32.shl
    memory.size
    i32.const 16
    i32.shl
    call $~lib/rt/tlsf/addMemory
    local.get $0
    local.get $4
    call $~lib/rt/tlsf/searchBlock
    local.tee $3
    i32.eqz
    if
     i32.const 0
     i32.const 1104
     i32.const 512
     i32.const 20
     call $~lib/wasi/index/abort
     unreachable
    end
   end
  end
  local.get $3
  i32.load
  i32.const -4
  i32.and
  local.get $4
  i32.lt_u
  if
   i32.const 0
   i32.const 1104
   i32.const 520
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $3
  i32.const 0
  i32.store offset=4
  local.get $3
  local.get $2
  i32.store offset=8
  local.get $3
  local.get $1
  i32.store offset=12
  local.get $0
  local.get $3
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $3
  local.get $4
  call $~lib/rt/tlsf/prepareBlock
  local.get $3
 )
 (func $~lib/rt/tlsf/__alloc (param $0 i32) (param $1 i32) (result i32)
  call $~lib/rt/tlsf/maybeInitialize
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/allocateBlock
  i32.const 16
  i32.add
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/rt/__allocArray (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 16
  local.get $0
  call $~lib/rt/tlsf/__alloc
  local.tee $0
  i32.const 0
  i32.const 0
  call $~lib/rt/tlsf/__alloc
  local.set $2
  local.get $1
  if
   local.get $2
   local.get $1
   i32.const 0
   call $~lib/memory/memory.copy
  end
  local.get $2
  call $~lib/rt/pure/__retain
  i32.store
  local.get $0
  local.get $2
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
 )
 (func $assembly/wasi/mandelbrot/Complex#constructor (param $0 f64) (param $1 f64) (result i32)
  (local $2 i32)
  i32.const 16
  i32.const 6
  call $~lib/rt/tlsf/__alloc
  call $~lib/rt/pure/__retain
  local.tee $2
  f64.const 0
  f64.store
  local.get $2
  f64.const 0
  f64.store offset=8
  local.get $2
  local.get $0
  f64.store
  local.get $2
  local.get $1
  f64.store offset=8
  local.get $2
 )
 (func $assembly/wasi/mandelbrot/mandelbrotAtPoint (param $0 f64) (param $1 f64) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  f64.const 0
  f64.const 0
  call $assembly/wasi/mandelbrot/Complex#constructor
  local.set $2
  local.get $0
  local.get $1
  call $assembly/wasi/mandelbrot/Complex#constructor
  local.set $4
  loop $for-loop|0
   local.get $5
   i32.const 1000
   i32.le_u
   if
    local.get $2
    f64.load
    local.tee $0
    local.get $0
    f64.mul
    local.get $2
    f64.load offset=8
    local.tee $0
    local.get $0
    f64.mul
    f64.add
    f64.sqrt
    f64.const 2
    f64.gt
    if
     local.get $2
     call $~lib/rt/pure/__release
     local.get $4
     call $~lib/rt/pure/__release
     local.get $5
     return
    end
    local.get $2
    call $~lib/rt/pure/__retain
    local.set $3
    local.get $2
    f64.load
    local.get $3
    f64.load
    f64.mul
    local.get $2
    f64.load offset=8
    local.get $3
    f64.load offset=8
    f64.mul
    f64.sub
    local.get $2
    f64.load
    local.get $3
    f64.load offset=8
    f64.mul
    local.get $2
    f64.load offset=8
    local.get $3
    f64.load
    f64.mul
    f64.add
    call $assembly/wasi/mandelbrot/Complex#constructor
    local.set $6
    local.get $3
    call $~lib/rt/pure/__release
    local.get $4
    call $~lib/rt/pure/__retain
    local.set $7
    local.get $6
    f64.load
    local.get $7
    f64.load
    f64.add
    local.get $6
    f64.load offset=8
    local.get $7
    f64.load offset=8
    f64.add
    call $assembly/wasi/mandelbrot/Complex#constructor
    local.get $7
    call $~lib/rt/pure/__release
    local.get $2
    call $~lib/rt/pure/__release
    local.set $2
    local.get $6
    call $~lib/rt/pure/__release
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $2
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 1000
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/reallocateBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $2
  call $~lib/rt/tlsf/prepareSize
  local.tee $3
  local.get $1
  i32.load
  local.tee $5
  i32.const -4
  i32.and
  i32.le_u
  if
   local.get $0
   local.get $1
   local.get $3
   call $~lib/rt/tlsf/prepareBlock
   local.get $1
   local.get $2
   i32.store offset=12
   local.get $1
   return
  end
  local.get $1
  i32.const 16
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $6
  i32.load
  local.tee $4
  i32.const 1
  i32.and
  if
   local.get $5
   i32.const -4
   i32.and
   i32.const 16
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $4
   local.get $3
   i32.ge_u
   if
    local.get $0
    local.get $6
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $4
    local.get $5
    i32.const 3
    i32.and
    i32.or
    i32.store
    local.get $1
    local.get $2
    i32.store offset=12
    local.get $0
    local.get $1
    local.get $3
    call $~lib/rt/tlsf/prepareBlock
    local.get $1
    return
   end
  end
  local.get $0
  local.get $2
  local.get $1
  i32.load offset=8
  call $~lib/rt/tlsf/allocateBlock
  local.tee $3
  local.get $1
  i32.load offset=4
  i32.store offset=4
  local.get $3
  i32.const 16
  i32.add
  local.get $1
  i32.const 16
  i32.add
  local.get $2
  call $~lib/memory/memory.copy
  local.get $1
  i32.const 2068
  i32.ge_u
  if
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/freeBlock
  end
  local.get $3
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   i32.const 4
   i32.sub
   local.tee $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   i32.const 28
   i32.sub
   local.tee $1
   i32.const 0
   i32.store offset=24
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/array/ensureSize (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 268435452
   i32.gt_u
   if
    i32.const 1232
    i32.const 1280
    i32.const 14
    i32.const 48
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   i32.load
   local.set $3
   call $~lib/rt/tlsf/maybeInitialize
   local.set $5
   local.get $3
   i32.const 16
   i32.sub
   local.set $2
   local.get $3
   i32.const 15
   i32.and
   i32.eqz
   i32.const 0
   local.get $3
   select
   if (result i32)
    local.get $2
    i32.load
    i32.const 1
    i32.and
    i32.eqz
   else
    i32.const 0
   end
   if (result i32)
    local.get $2
    i32.load offset=4
    i32.const -268435456
    i32.and
    i32.eqz
   else
    i32.const 0
   end
   i32.eqz
   if
    i32.const 0
    i32.const 1104
    i32.const 580
    i32.const 3
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $4
   local.get $5
   local.get $2
   local.get $1
   i32.const 2
   i32.shl
   local.tee $2
   call $~lib/rt/tlsf/reallocateBlock
   i32.const 16
   i32.add
   local.tee $1
   i32.add
   local.get $2
   local.get $4
   i32.sub
   call $~lib/memory/memory.fill
   local.get $1
   local.get $3
   i32.ne
   if
    local.get $0
    local.get $1
    i32.store
    local.get $0
    local.get $1
    i32.store offset=4
   end
   local.get $0
   local.get $2
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<u32>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 1
  i32.add
  local.tee $3
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
 )
 (func $~lib/array/Array<~lib/array/Array<u32>>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  local.get $0
  i32.load offset=12
  local.tee $2
  i32.const 1
  i32.add
  local.tee $3
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  call $~lib/rt/pure/__retain
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $~lib/array/Array<~lib/array/Array<u32>>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1344
   i32.const 1280
   i32.const 104
   i32.const 42
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.eqz
  if
   i32.const 1408
   i32.const 1280
   i32.const 108
   i32.const 40
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
 )
 (func $~lib/array/Array<u32>#__get (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 1344
   i32.const 1280
   i32.const 104
   i32.const 42
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/string/String#concat (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $1
  i32.eqz
  if
   local.get $1
   local.tee $2
   i32.const 1808
   i32.ne
   if
    local.get $2
    call $~lib/rt/pure/__release
   end
   i32.const 1808
   local.set $1
  end
  local.get $0
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.tee $3
  local.get $1
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.tee $4
  i32.add
  local.tee $2
  i32.eqz
  if
   local.get $1
   call $~lib/rt/pure/__release
   i32.const 1328
   return
  end
  local.get $2
  i32.const 1
  call $~lib/rt/tlsf/__alloc
  call $~lib/rt/pure/__retain
  local.tee $2
  local.get $0
  local.get $3
  call $~lib/memory/memory.copy
  local.get $2
  local.get $3
  i32.add
  local.get $1
  local.get $4
  call $~lib/memory/memory.copy
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
 )
 (func $~lib/string/String.UTF8.byteLength (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $4
  local.tee $0
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.add
  local.set $2
  loop $while-continue|0
   local.get $0
   local.get $2
   i32.lt_u
   if
    local.get $0
    i32.load16_u
    local.tee $3
    i32.const 128
    i32.lt_u
    if (result i32)
     local.get $1
     i32.const 1
     i32.add
    else
     local.get $3
     i32.const 2048
     i32.lt_u
     if (result i32)
      local.get $1
      i32.const 2
      i32.add
     else
      local.get $0
      i32.const 2
      i32.add
      local.get $2
      i32.lt_u
      i32.const 0
      local.get $3
      i32.const 64512
      i32.and
      i32.const 55296
      i32.eq
      select
      if
       local.get $0
       i32.load16_u offset=2
       i32.const 64512
       i32.and
       i32.const 56320
       i32.eq
       if
        local.get $1
        i32.const 4
        i32.add
        local.set $1
        local.get $0
        i32.const 4
        i32.add
        local.set $0
        br $while-continue|0
       end
      end
      local.get $1
      i32.const 3
      i32.add
     end
    end
    local.set $1
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    br $while-continue|0
   end
  end
  local.get $4
  call $~lib/rt/pure/__release
  local.get $1
 )
 (func $~lib/as-wasi/as-wasi/Console.log (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.tee $3
  call $~lib/rt/pure/__retain
  local.tee $2
  call $~lib/rt/pure/__retain
  local.tee $4
  call $~lib/rt/pure/__retain
  local.tee $5
  call $~lib/rt/pure/__retain
  local.tee $0
  call $~lib/string/String.UTF8.byteLength
  i32.const 0
  call $~lib/rt/tlsf/__alloc
  local.set $1
  local.get $0
  local.get $0
  call $~lib/string/String#get:length
  local.get $1
  call $~lib/string/String.UTF8.encodeUnsafe
  drop
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  i32.const 16
  i32.sub
  i32.load offset=12
  local.set $0
  i32.const 1824
  local.get $1
  i32.store
  i32.const 1828
  local.get $0
  i32.store
  i32.const 1856
  i32.const 10
  i32.store8
  i32.const 1832
  i32.const 1856
  i32.store
  i32.const 1836
  i32.const 1
  i32.store
  i32.const 1
  i32.const 1824
  i32.const 2
  i32.const 1872
  call $~lib/bindings/wasi_snapshot_preview1/fd_write
  drop
  local.get $1
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $assembly/wasi/mandelbrot/renderMandelbrot (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $4
  loop $for-loop|0
   local.get $5
   local.get $4
   i32.load offset=12
   i32.lt_s
   if
    i32.const 1328
    local.set $0
    local.get $4
    local.get $5
    call $~lib/array/Array<~lib/array/Array<u32>>#__get
    local.set $6
    i32.const 0
    local.set $3
    loop $for-loop|1
     local.get $3
     local.get $6
     i32.load offset=12
     i32.lt_s
     if
      local.get $0
      local.tee $1
      block $break|2 (result i32)
       block $case8|2
        block $case7|2
         block $case6|2
          block $case5|2
           block $case4|2
            block $case3|2
             block $case2|2
              block $case1|2
               local.get $6
               local.get $3
               call $~lib/array/Array<u32>#__get
               local.tee $2
               i32.const 0
               i32.ge_u
               local.tee $0
               if (result i32)
                local.get $2
                i32.const 2
                i32.le_u
               else
                local.get $0
               end
               i32.const 1
               i32.ne
               if
                local.get $2
                i32.const 3
                i32.ge_u
                local.tee $0
                if (result i32)
                 local.get $2
                 i32.const 5
                 i32.le_u
                else
                 local.get $0
                end
                i32.const 1
                i32.eq
                br_if $case1|2
                local.get $2
                i32.const 6
                i32.ge_u
                local.tee $0
                if (result i32)
                 local.get $2
                 i32.const 10
                 i32.le_u
                else
                 local.get $0
                end
                i32.const 1
                i32.eq
                br_if $case2|2
                local.get $2
                i32.const 11
                i32.ge_u
                local.tee $0
                if (result i32)
                 local.get $2
                 i32.const 30
                 i32.le_u
                else
                 local.get $0
                end
                i32.const 1
                i32.eq
                br_if $case3|2
                local.get $2
                i32.const 31
                i32.ge_u
                local.tee $0
                if (result i32)
                 local.get $2
                 i32.const 100
                 i32.le_u
                else
                 local.get $0
                end
                i32.const 1
                i32.eq
                br_if $case4|2
                local.get $2
                i32.const 101
                i32.ge_u
                local.tee $0
                if (result i32)
                 local.get $2
                 i32.const 200
                 i32.le_u
                else
                 local.get $0
                end
                i32.const 1
                i32.eq
                br_if $case5|2
                local.get $2
                i32.const 201
                i32.ge_u
                local.tee $0
                if (result i32)
                 local.get $2
                 i32.const 400
                 i32.le_u
                else
                 local.get $0
                end
                i32.const 1
                i32.eq
                br_if $case6|2
                local.get $2
                i32.const 401
                i32.ge_u
                local.tee $0
                if (result i32)
                 local.get $2
                 i32.const 700
                 i32.le_u
                else
                 local.get $0
                end
                i32.const 1
                i32.eq
                br_if $case7|2
                br $case8|2
               end
               i32.const 1520
               br $break|2
              end
              i32.const 1552
              br $break|2
             end
             i32.const 1584
             br $break|2
            end
            i32.const 1616
            br $break|2
           end
           i32.const 1648
           br $break|2
          end
          i32.const 1680
          br $break|2
         end
         i32.const 1712
         br $break|2
        end
        i32.const 1744
        br $break|2
       end
       i32.const 1776
      end
      local.tee $2
      call $~lib/string/String#concat
      local.set $0
      local.get $1
      call $~lib/rt/pure/__release
      local.get $2
      call $~lib/rt/pure/__release
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      br $for-loop|1
     end
    end
    local.get $0
    call $~lib/as-wasi/as-wasi/Console.log
    local.get $0
    call $~lib/rt/pure/__release
    local.get $6
    call $~lib/rt/pure/__release
    local.get $5
    i32.const 1
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $4
  call $~lib/rt/pure/__release
 )
 (func $~lib/array/Array<i32>#__set (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   local.get $1
   i32.const 0
   i32.lt_s
   if
    i32.const 1344
    i32.const 1280
    i32.const 120
    i32.const 22
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   local.tee $3
   call $~lib/array/ensureSize
   local.get $0
   local.get $3
   i32.store offset=12
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
 )
 (func $assembly/wasi/matrixSpiralTraversal/generateMatrix (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i32.const 8
  i32.const 1936
  call $~lib/rt/__allocArray
  call $~lib/rt/pure/__retain
  local.set $4
  loop $for-loop|0
   local.get $2
   i32.const 30
   i32.lt_s
   if
    local.get $4
    i32.const 5
    i32.const 1952
    call $~lib/rt/__allocArray
    call $~lib/rt/pure/__retain
    local.tee $0
    call $~lib/array/Array<~lib/array/Array<u32>>#push
    i32.const 0
    local.set $3
    loop $for-loop|1
     local.get $3
     i32.const 60
     i32.lt_s
     if
      local.get $4
      local.get $2
      call $~lib/array/Array<~lib/array/Array<u32>>#__get
      local.tee $1
      i32.const 0
      call $~lib/array/Array<u32>#push
      local.get $1
      call $~lib/rt/pure/__release
      local.get $3
      i32.const 1
      i32.add
      local.set $3
      br $for-loop|1
     end
    end
    local.get $0
    call $~lib/rt/pure/__release
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $for-loop|0
   end
  end
  i32.const 0
  local.set $2
  i32.const 0
  local.set $1
  local.get $4
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $3
  local.get $4
  i32.const 0
  call $~lib/array/Array<~lib/array/Array<u32>>#__get
  local.tee $7
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $5
  loop $while-continue|2
   local.get $1
   local.get $5
   i32.le_s
   i32.const 0
   local.get $2
   local.get $3
   i32.le_s
   select
   if
    local.get $1
    local.set $0
    loop $for-loop|3
     local.get $0
     local.get $5
     i32.le_s
     if
      local.get $4
      local.get $2
      call $~lib/array/Array<~lib/array/Array<u32>>#__get
      local.tee $6
      local.get $0
      i32.const 1
      call $~lib/array/Array<i32>#__set
      local.get $6
      call $~lib/rt/pure/__release
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|3
     end
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $0
    loop $for-loop|4
     local.get $0
     local.get $3
     i32.le_s
     if
      local.get $4
      local.get $0
      call $~lib/array/Array<~lib/array/Array<u32>>#__get
      local.tee $6
      local.get $5
      i32.const 2
      call $~lib/array/Array<i32>#__set
      local.get $6
      call $~lib/rt/pure/__release
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|4
     end
    end
    local.get $5
    i32.const 1
    i32.sub
    local.set $0
    loop $for-loop|5
     local.get $0
     local.get $1
     i32.ge_s
     if
      local.get $2
      local.get $3
      i32.ne
      if
       local.get $4
       local.get $3
       call $~lib/array/Array<~lib/array/Array<u32>>#__get
       local.tee $6
       local.get $0
       i32.const 3
       call $~lib/array/Array<i32>#__set
       local.get $6
       call $~lib/rt/pure/__release
       local.get $0
       i32.const 1
       i32.sub
       local.set $0
       br $for-loop|5
      end
     end
    end
    local.get $3
    i32.const 1
    i32.sub
    local.set $0
    loop $for-loop|6
     local.get $0
     local.get $2
     i32.gt_s
     if
      local.get $1
      local.get $5
      i32.ne
      if
       local.get $4
       local.get $0
       call $~lib/array/Array<~lib/array/Array<u32>>#__get
       local.tee $6
       local.get $1
       i32.const 4
       call $~lib/array/Array<i32>#__set
       local.get $6
       call $~lib/rt/pure/__release
       local.get $0
       i32.const 1
       i32.sub
       local.set $0
       br $for-loop|6
      end
     end
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    i32.const 1
    i32.sub
    local.set $3
    local.get $5
    i32.const 1
    i32.sub
    local.set $5
    br $while-continue|2
   end
  end
  local.get $7
  call $~lib/rt/pure/__release
  local.get $4
 )
 (func $assembly/wasi/matrixSpiralTraversal/renderSpiral (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $3
  loop $for-loop|0
   local.get $4
   local.get $3
   i32.load offset=12
   i32.lt_s
   if
    i32.const 1328
    local.set $0
    local.get $3
    local.get $4
    call $~lib/array/Array<~lib/array/Array<u32>>#__get
    local.set $5
    i32.const 0
    local.set $2
    loop $for-loop|1
     local.get $2
     local.get $5
     i32.load offset=12
     i32.lt_s
     if
      local.get $0
      local.tee $1
      block $break|2 (result i32)
       block $case4|2
        block $case3|2
         block $case2|2
          block $case1|2
           block $case0|2
            local.get $5
            local.get $2
            call $~lib/array/Array<u32>#__get
            i32.const 1
            i32.sub
            br_table $case0|2 $case1|2 $case2|2 $case3|2 $case4|2
           end
           i32.const 1968
           br $break|2
          end
          i32.const 2000
          br $break|2
         end
         i32.const 2032
         br $break|2
        end
        i32.const 2064
        br $break|2
       end
       i32.const 1520
      end
      local.tee $6
      call $~lib/string/String#concat
      local.set $0
      local.get $1
      call $~lib/rt/pure/__release
      local.get $6
      call $~lib/rt/pure/__release
      local.get $2
      i32.const 1
      i32.add
      local.set $2
      br $for-loop|1
     end
    end
    local.get $0
    call $~lib/as-wasi/as-wasi/Console.log
    local.get $0
    call $~lib/rt/pure/__release
    local.get $5
    call $~lib/rt/pure/__release
    local.get $4
    i32.const 1
    i32.add
    local.set $4
    br $for-loop|0
   end
  end
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $~start
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  global.get $~started
  if
   return
  else
   i32.const 1
   global.set $~started
  end
  i32.const 4
  i32.const 1040
  call $~lib/rt/__allocArray
  call $~lib/rt/pure/__retain
  local.set $2
  loop $for-loop|0
   local.get $0
   i32.const 24
   i32.lt_u
   if
    i32.const 3
    i32.const 1216
    call $~lib/rt/__allocArray
    call $~lib/rt/pure/__retain
    local.set $3
    i32.const 0
    local.set $1
    loop $for-loop|1
     local.get $1
     i32.const 100
     i32.lt_u
     if
      local.get $3
      local.get $1
      f64.convert_i32_u
      f64.const 100
      f64.div
      f64.const 3
      f64.mul
      f64.const -2
      f64.add
      local.get $0
      f64.convert_i32_u
      f64.const 24
      f64.div
      f64.const 2
      f64.mul
      f64.const -1
      f64.add
      call $assembly/wasi/mandelbrot/mandelbrotAtPoint
      call $~lib/array/Array<u32>#push
      local.get $1
      i32.const 1
      i32.add
      local.set $1
      br $for-loop|1
     end
    end
    local.get $2
    local.get $3
    call $~lib/array/Array<~lib/array/Array<u32>>#push
    local.get $3
    call $~lib/rt/pure/__release
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    br $for-loop|0
   end
  end
  local.get $2
  call $assembly/wasi/mandelbrot/renderMandelbrot
  local.get $2
  call $~lib/rt/pure/__release
  call $assembly/wasi/matrixSpiralTraversal/generateMatrix
  local.tee $0
  call $assembly/wasi/matrixSpiralTraversal/renderSpiral
  local.get $0
  call $~lib/rt/pure/__release
 )
 (func $~lib/rt/pure/decrement (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 268435455
  i32.and
  local.set $1
  local.get $0
  i32.load
  i32.const 1
  i32.and
  if
   i32.const 0
   i32.const 1056
   i32.const 122
   i32.const 14
   call $~lib/wasi/index/abort
   unreachable
  end
  local.get $1
  i32.const 1
  i32.eq
  if
   block $__inlined_func$~lib/rt/__visit_members
    block $switch$1$default
     block $switch$1$case$10
      block $switch$1$case$7
       block $switch$1$case$6
        block $switch$1$case$5
         block $switch$1$case$4
          local.get $0
          i32.const 16
          i32.add
          local.tee $1
          i32.const 8
          i32.sub
          i32.load
          br_table $__inlined_func$~lib/rt/__visit_members $__inlined_func$~lib/rt/__visit_members $switch$1$case$4 $switch$1$case$5 $switch$1$case$6 $switch$1$case$7 $__inlined_func$~lib/rt/__visit_members $__inlined_func$~lib/rt/__visit_members $switch$1$case$10 $switch$1$default
         end
         local.get $1
         i32.load
         local.tee $1
         if
          local.get $1
          call $~lib/rt/pure/__visit
         end
         br $__inlined_func$~lib/rt/__visit_members
        end
        local.get $1
        i32.load
        call $~lib/rt/pure/__visit
        br $__inlined_func$~lib/rt/__visit_members
       end
       local.get $1
       call $~lib/array/Array<~lib/array/Array<u32>>#__visit_impl
       br $__inlined_func$~lib/rt/__visit_members
      end
      local.get $1
      i32.load
      call $~lib/rt/pure/__visit
      br $__inlined_func$~lib/rt/__visit_members
     end
     local.get $1
     call $~lib/array/Array<~lib/array/Array<u32>>#__visit_impl
     br $__inlined_func$~lib/rt/__visit_members
    end
    unreachable
   end
   local.get $2
   i32.const -2147483648
   i32.and
   if
    i32.const 0
    i32.const 1056
    i32.const 126
    i32.const 18
    call $~lib/wasi/index/abort
    unreachable
   end
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/freeBlock
  else
   local.get $1
   i32.const 0
   i32.le_u
   if
    i32.const 0
    i32.const 1056
    i32.const 136
    i32.const 16
    call $~lib/wasi/index/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.sub
   local.get $2
   i32.const -268435456
   i32.and
   i32.or
   i32.store offset=4
  end
 )
 (func $~lib/rt/pure/__visit (param $0 i32)
  local.get $0
  i32.const 2068
  i32.lt_u
  if
   return
  end
  local.get $0
  i32.const 16
  i32.sub
  call $~lib/rt/pure/decrement
 )
 (func $~lib/array/Array<~lib/array/Array<u32>>#__visit_impl (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  i32.load offset=12
  i32.const 2
  i32.shl
  i32.add
  local.set $2
  loop $while-continue|0
   local.get $1
   local.get $2
   i32.lt_u
   if
    local.get $1
    i32.load
    local.tee $3
    if
     local.get $3
     call $~lib/rt/pure/__visit
    end
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $while-continue|0
   end
  end
  local.get $0
  i32.load
  call $~lib/rt/pure/__visit
 )
)
