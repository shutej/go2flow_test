package go2flow_integration

//go:generate go2flow --yml go2flow.yml --out gen
//go:generate flow
//go:generate webpack

import "time"

type EmbeddedStruct struct {
	AString    string         `json:"aString,omitempty"`
	AInt       int            `json:"aInt,omitempty"`
	AFloat     float64        `json:"aFloat,omitempty"`
	ABool      bool           `json:"aBool,omitempty"`
	AByte      byte           `json:"aByte,omitempty"`
	AIntPtr    *int           `json:"aIntPtr,omitempty"`
	AIntSlice  []int          `json:"aIntSlice,omitempty"`
	AIntMap    map[string]int `json:"aIntMap,omitempty"`
	AByteSlice []byte         `json:"aByteSlice,omitempty"`
}

type Test1 struct {
	AString string  `json:"aString"`
	AInt    int     `json:"aInt"`
	AFloat  float64 `json:"aFloat"`
	ABool   bool    `json:"aBool"`
	AByte   byte    `json:"aByte"`
}

type Test2 struct {
	AStringPtr *string  `json:"aStringPtr"`
	AIntPtr    *int     `json:"aIntPtr"`
	AFloatPtr  *float64 `json:"aFloatPtr"`
	ABoolPtr   *bool    `json:"aBoolPtr"`
	ABytePtr   *byte    `json:"aBytePtr"`
}

type Test3 struct {
	AStringSlice []string  `json:"aStringSlice"`
	AIntSlice    []int     `json:"aIntSlice"`
	AFloatSlice  []float64 `json:"aFloatSlice"`
	ABoolSlice   []bool    `json:"aBoolSlice"`
	AByteSlice   []byte    `json:"aByteSlice"`
}

type Test4 struct {
	AStringObject struct{ X string }  `json:"aStringObject"`
	AIntObject    struct{ X int }     `json:"aIntObject"`
	AFloatObject  struct{ X float64 } `json:"aFloatObject"`
	ABoolObject   struct{ X bool }    `json:"aBoolObject"`
	AByteObject   struct{ X byte }    `json:"aByteObject"`
}

type Test5 struct {
	AStringMap map[string]string  `json:"aStringMap"`
	AIntMap    map[string]int     `json:"aIntMap"`
	AFloatMap  map[string]float64 `json:"aFloatMap"`
	ABoolMap   map[string]bool    `json:"aBoolMap"`
	AByteMap   map[string]byte    `json:"aByteMap"`
}

type Test6 struct {
	EmbeddedStruct
	AInt2 int
}

type Test7 *Test1

type Test8 []*Test1

type Test9 struct {
	X time.Time
}

type Test10 *Test10
