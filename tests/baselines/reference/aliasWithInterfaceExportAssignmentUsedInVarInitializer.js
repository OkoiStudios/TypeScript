//// [tests/cases/compiler/aliasWithInterfaceExportAssignmentUsedInVarInitializer.ts] ////

//// [aliasWithInterfaceExportAssignmentUsedInVarInitializer_0.ts]
interface c {
    q3: number;
}
export = c;

//// [aliasWithInterfaceExportAssignmentUsedInVarInitializer_1.ts]
import moduleA = require("./aliasWithInterfaceExportAssignmentUsedInVarInitializer_0");
var d = b.q3;

//// [aliasWithInterfaceExportAssignmentUsedInVarInitializer_0.js]
"use strict";
//// [aliasWithInterfaceExportAssignmentUsedInVarInitializer_1.js]
"use strict";
var d = b.q3;
