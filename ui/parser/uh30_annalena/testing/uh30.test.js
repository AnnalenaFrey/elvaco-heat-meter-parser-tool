const {  
    parserForUH30,
    scaleEnergy,
    scaleFlow,
    scaleFwTemp,
    scaleRtTemp,
    scaleCoolingEnergy,
    scaleEnergyInWrongMountingPosition,
    scaleMaxFwTemp,
    scaleMaxRtTemp,
    scalePower,
    scaleVolume,
    scalePreviousMonthEnergy,
    analyseError,
    checkMeterCommunicationError} = require('../uh30'); 


describe("Test Energy Scaling",() =>{
    test("Energy Scaling for 0400 prefix",() =>{
        const prefix = '0400';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.0001);
    });
    test("Energy Scaling for 0401 prefix",() =>{
        const prefix = '0401';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.0001);
    });
    test("Energy Scaling for 0402 prefix",() =>{
        const prefix = '0402';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.0001);
    });
    test("Energy Scaling for 0403 prefix",() =>{
        const prefix = '0403';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.0001);
    });
    test("Energy Scaling for 0404 prefix",() =>{
        const prefix = '0404';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.001);
    });
    test("Energy Scaling for 0405 prefix",() =>{
        const prefix = '0405';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.01);
    });
    test("Energy Scaling for 0406 prefix",() =>{
        const prefix = '0406';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.1);
    });
    test("Energy Scaling for 0407 prefix",() =>{
        const prefix = '0407';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(1);
    });
    test("Energy Scaling for 040E prefix",() =>{
        const prefix = '040E';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.027777777777777776);
    });
    test("Energy Scaling for 040F prefix",() =>{
        const prefix = '040F';
        const rawEnergyValue = 100;
        expect(scaleEnergy(prefix, rawEnergyValue)).toBe(0.2777777777777778);
    });
    test("Error for unknown prefix",() =>{
        const energyPrefix = '04FF';
        const rawEnergyValue = 100;
        expect(() => scaleEnergy(energyPrefix, rawEnergyValue)).toThrow('Unknown energy prefix: ' + energyPrefix);
    });
});


describe("Test Volume Scaling", ()=>{
    test("Volume Scaling for 0411 prefix", ()=>{
        const volumePrefix = '0411';
        const rawVolumeValue = 100;
        expect(scaleVolume(volumePrefix, rawVolumeValue)).toBe(0.001)
    });
    test("Volume Scaling for 0412 prefix", ()=>{
        const volumePrefix = '0412';
        const rawVolumeValue = 100;
        expect(scaleVolume(volumePrefix, rawVolumeValue)).toBe(0.01)
    });
    test("Volume Scaling for 0413 prefix", ()=>{
        const volumePrefix = '0413';
        const rawVolumeValue = 100;
        expect(scaleVolume(volumePrefix, rawVolumeValue)).toBe(0.1)
    });
    test("Volume Scaling for 0414 prefix", ()=>{
        const volumePrefix = '0414';
        const rawVolumeValue = 100;
        expect(scaleVolume(volumePrefix, rawVolumeValue)).toBe(1)
    });
    test("Volume Scaling for 0415 prefix", ()=>{
        const volumePrefix = '0415';
        const rawVolumeValue = 100;
        expect(scaleVolume(volumePrefix, rawVolumeValue)).toBe(10)
    });
    test("Volume Scaling for 0416 prefix", ()=>{
        const volumePrefix = '0416';
        const rawVolumeValue = 100;
        expect(scaleVolume(volumePrefix, rawVolumeValue)).toBe(100)
    });
    test("Volume Scaling for 0417 prefix", ()=>{
        const volumePrefix = '0417';
        const rawVolumeValue = 100;
        expect(scaleVolume(volumePrefix, rawVolumeValue)).toBe(1000)
    });
    test("Error for unknown prefix",() =>{
        const volumePrefix = '04FF';
        const rawVolumeValue = 100;
        expect(() => scaleVolume(volumePrefix, rawVolumeValue)).toThrow('Unknown volume prefix: ' + volumePrefix);
    });
});


describe("Test Power Scaling", () =>{
    test("Power Scaling for 022A prefix", () =>{
        const powerPrefix = '022A';
        const rawPowerValue = 100;
        expect(scalePower(powerPrefix, rawPowerValue)).toBe(0.1);
    });
    test("Power Scaling for 022B prefix", () =>{
        const powerPrefix = '022B';
        const rawPowerValue = 100;
        expect(scalePower(powerPrefix, rawPowerValue)).toBe(0.1);
    });
    test("Power Scaling for 022C prefix", () =>{
        const powerPrefix = '022C';
        const rawPowerValue = 100;
        expect(scalePower(powerPrefix, rawPowerValue)).toBe(1);
    });
    test("Power Scaling for 022D prefix", () =>{
        const powerPrefix = '022D';
        const rawPowerValue = 100;
        expect(scalePower(powerPrefix, rawPowerValue)).toBe(10);
    });
    test("Power Scaling for 022E prefix", () =>{
        const powerPrefix = '022E';
        const rawPowerValue = 100;
        expect(scalePower(powerPrefix, rawPowerValue)).toBe(100);
    });
    test("Power Scaling for 022F prefix", () =>{
        const powerPrefix = '022F';
        const rawPowerValue = 100;
        expect(scalePower(powerPrefix, rawPowerValue)).toBe(1000);
    });
    test("Error for unknown prefix",() =>{
        const powerPrefix = '04FF';
        const rawPowerValue = 100;
        expect(() => scalePower(powerPrefix, rawPowerValue)).toThrow('Unknown power prefix: ' + powerPrefix);
    });
});

describe("Test Flow Scaling", () =>{
    test("Flow Scaling for 023B prefix", ()=>{
        const flowPrefix = '023B';
        const rawFlowValue = 100;
        expect(scaleFlow(flowPrefix, rawFlowValue)).toBe(0.1);
    });
    test("Flow Scaling for 023C prefix", ()=>{
        const flowPrefix = '023C';
        const rawFlowValue = 100;
        expect(scaleFlow(flowPrefix, rawFlowValue)).toBe(1);
    });
    test("Flow Scaling for 023D prefix", ()=>{
        const flowPrefix = '023D';
        const rawFlowValue = 100;
        expect(scaleFlow(flowPrefix, rawFlowValue)).toBe(10);
    });
    test("Flow Scaling for 023E prefix", ()=>{
        const flowPrefix = '023E';
        const rawFlowValue = 100;
        expect(scaleFlow(flowPrefix, rawFlowValue)).toBe(100);
    });
    test("Flow Scaling for 023F prefix", ()=>{
        const flowPrefix = '023F';
        const rawFlowValue = 100;
        expect(scaleFlow(flowPrefix, rawFlowValue)).toBe(1000);
    });
    test("Error for unknown prefix",() =>{
        const flowPrefix = '04FF';
        const rawFlowValue = 100;
        expect(() => scaleFlow(flowPrefix, rawFlowValue)).toThrow('Unknown flow prefix: ' + flowPrefix);
    });
});

describe("Test Forward Temperature Scaling", ()=>{
    test("Fw Temp Scaling for 0258 prefix", ()=>{
        const fw_tempPrefix = '0258';
        const fw_tempRaw = 100;
        expect(scaleFwTemp(fw_tempPrefix, fw_tempRaw)).toBe(0.1);
    });
    test("Fw Temp Scaling for 0259 prefix", ()=>{
        const fw_tempPrefix = '0259';
        const fw_tempRaw = 100;
        expect(scaleFwTemp(fw_tempPrefix, fw_tempRaw)).toBe(1);
    });
    test("Fw Temp Scaling for 025A prefix", ()=>{
        const fw_tempPrefix = '025A';
        const fw_tempRaw = 100;
        expect(scaleFwTemp(fw_tempPrefix, fw_tempRaw)).toBe(10);
    });
    test("Fw Temp Scaling for 025B prefix", ()=>{
        const fw_tempPrefix = '025B';
        const fw_tempRaw = 100;
        expect(scaleFwTemp(fw_tempPrefix, fw_tempRaw)).toBe(100);
    });
    test("Fw Temp Scaling for unknown prefix", ()=>{
        const fw_tempPrefix = '04FF';
        const fw_tempRaw = 100;
        expect(() => scaleFwTemp(fw_tempPrefix, fw_tempRaw)).toThrow('Unknown fw_temp prefix: ' + fw_tempPrefix);
    });
});

describe("Test Return Temperature Scaling", ()=>{
    test("Rt Temp Scaling for 025C prefix", ()=>{
        const rt_tempPrefix = '025C';
        const rt_tempRaw = 100;
        expect(scaleRtTemp(rt_tempPrefix, rt_tempRaw)).toBe(0.1);
    });
    test("Rt Temp Scaling for 025D prefix", ()=>{
        const rt_tempPrefix = '025D';
        const rt_tempRaw = 100;
        expect(scaleRtTemp(rt_tempPrefix, rt_tempRaw)).toBe(1);
    });
    test("Rt Temp Scaling for 025E prefix", ()=>{
        const rt_tempPrefix = '025E';
        const rt_tempRaw = 100;
        expect(scaleRtTemp(rt_tempPrefix, rt_tempRaw)).toBe(10);
    });
    test("Rt Temp Scaling for 025F prefix", ()=>{
        const rt_tempPrefix = '025F';
        const rt_tempRaw = 100;
        expect(scaleRtTemp(rt_tempPrefix, rt_tempRaw)).toBe(100);
    });
    test("Rt Temp Scaling for unknown prefix", ()=>{
        const rt_tempPrefix = '04FF';
        const rt_tempRaw = 100;
        expect(() => scaleRtTemp(rt_tempPrefix, rt_tempRaw)).toThrow('Unknown rt_temp prefix: ' + rt_tempPrefix);
    });
});


describe("Test Cooling Energy Scaling",()=>{
    test("Cooling Energy Scaling for 0480FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0480FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.0001);
    });
    test("Cooling Energy Scaling for 0481FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0481FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.0001);
    });
    test("Cooling Energy Scaling for 0482FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0482FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.0001);
    });
    test("Cooling Energy Scaling for 0483FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0483FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.0001);
    });
    test("Cooling Energy Scaling for 0484FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0484FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.001);
    });
    test("Cooling Energy Scaling for 0485FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0485FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.01);
    });
    test("Cooling Energy Scaling for 0486FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0486FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.1);
    });
    test("Cooling Energy Scaling for 0487FF02 prefix", ()=>{
        const coolingEnergyPrefix = '0487FF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(1);
    });
    test("Cooling Energy Scaling for 048EFF02 prefix", ()=>{
        const coolingEnergyPrefix = '048EFF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.027777777777777776);
    });
    test("Cooling Energy Scaling for 048FFF02 prefix", ()=>{
        const coolingEnergyPrefix = '048FFF02';
        const rawCoolingEnergyValue = 100;
        expect(scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toBe(0.2777777777777778);
    });
    test("Cooling Energy Scaling for unknown prefix", ()=>{
        const coolingEnergyPrefix = '04FF';
        const rawCoolingEnergyValue = 100;
        expect(() => scaleCoolingEnergy(coolingEnergyPrefix, rawCoolingEnergyValue)).toThrow('Unknown cooling energy prefix: ' + coolingEnergyPrefix);
    });
});

describe("Test Energy in Wrong Mounting Position Scaling", ()=>{
    test("Energy in Wrong Mounting Position Scaling for 0480FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0480FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.0001);
    });
    test("Energy in Wrong Mounting Position Scaling for 0410FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0481FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.0001);
    });
    test("Energy in Wrong Mounting Position Scaling for 0482FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0482FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.0001);
    });
    test("Energy in Wrong Mounting Position Scaling for 0483FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0483FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.0001);
    });
    test("Energy in Wrong Mounting Position Scaling for 0484FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0484FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.001);
    });
    test("Energy in Wrong Mounting Position Scaling for 0485FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0485FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.001);
    });
    test("Energy in Wrong Mounting Position Scaling for 0486FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0486FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.1);
    });
    test("Energy in Wrong Mounting Position Scaling for 0487FF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '0487FF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(1);
    });
    test("Energy in Wrong Mounting Position Scaling for 048EFF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '048EFF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.027777777777777776);
    });
    test("Energy in Wrong Mounting Position Scaling for 048FFF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '048FFF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(0.2777777777777778);
    });
    test("Energy in Wrong Mounting Position Scaling for 04FB8DFF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '04FB8DFF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(86058.51979345955);
    });
    test("Energy in Wrong Mounting Position Scaling for 04FB8EFF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '04FB8EFF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(860585.1979345955);
    });
    test("Energy in Wrong Mounting Position Scaling for 04FB8FFF03 prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '04FB8FFF03';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toBe(8605851.979345955);
    });
    test("Energy in Wrong Mounting Position Scaling for unknown prefix", ()=>{
        const energyInWrongMountingPositionPrefix = '04FF';
        const rawEnergyInWrongMountingPositionValue = 100;
        expect(() => scaleEnergyInWrongMountingPosition(energyInWrongMountingPositionPrefix, rawEnergyInWrongMountingPositionValue)).toThrow('Unknown energy in wrong mounting position prefix: ' + energyInWrongMountingPositionPrefix);

    });
});

describe("Test Previous Month Energy Scaling",()=>{
    test("Previous Month Energy Scaling for B40100 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40100';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.0001);
    });
    test("Previous Month Energy Scaling for B40101 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40101';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.0001);
    });
    test("Previous Month Energy Scaling for B40102 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40102';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.0001);
    });
    test("Previous Month Energy Scaling for B40103 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40103';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.0001);
    });
    test("Previous Month Energy Scaling for B40104 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40104';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.001);
    });
    test("Previous Month Energy Scaling for B40105 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40105';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.01);
    });
    test("Previous Month Energy Scaling for B40106 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40106';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.1);
    });
    test("Previous Month Energy Scaling for B40107 prefix",()=>{
        const previousMonthEnergyPrefix = 'B40107';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(1);
    });
    test("Previous Month Energy Scaling for B4010E prefix",()=>{
        const previousMonthEnergyPrefix = 'B4010E';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.027777777777777776);
    });
    test("Previous Month Energy Scaling for B4010F prefix",()=>{
        const previousMonthEnergyPrefix = 'B4010F';
        const rawPreviousMonthEnergyValue = 100;
        expect(scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toBe(0.2777777777777778);
    });
    test("Previous Month Energy Scaling for unknown prefix",()=>{
        const previousMonthEnergyPrefix = '04FF';
        const rawPreviousMonthEnergyValue = 100;
        expect(() => scalePreviousMonthEnergy(previousMonthEnergyPrefix, rawPreviousMonthEnergyValue)).toThrow('Unknown previous month energy prefix: ' + previousMonthEnergyPrefix);
    });
});


describe("Test Max Fw Temp Scaling", ()=>{
    test("Max Fw Temp Scaling for 1258 prefix", ()=>{
        const max_fwTempPrefix = '1258';
        const max_fwTempRaw = 100;
        expect(scaleMaxFwTemp(max_fwTempPrefix, max_fwTempRaw)).toBe(0.1);
    });
    test("Max Fw Temp Scaling for 1259 prefix", ()=>{
        const max_fwTempPrefix = '1259';
        const max_fwTempRaw = 100;
        expect(scaleMaxFwTemp(max_fwTempPrefix, max_fwTempRaw)).toBe(1);
    });
    test("Max Fw Temp Scaling for 125A prefix", ()=>{
        const max_fwTempPrefix = '125A';
        const max_fwTempRaw = 100;
        expect(scaleMaxFwTemp(max_fwTempPrefix, max_fwTempRaw)).toBe(10);
    });
    test("Max Fw Temp Scaling for 125B prefix", ()=>{
        const max_fwTempPrefix = '125B';
        const max_fwTempRaw = 100;
        expect(scaleMaxFwTemp(max_fwTempPrefix, max_fwTempRaw)).toBe(100);
    });
    test("Max Fw Temp Scaling for unknonw prefix", ()=>{
        const max_fwTempPrefix = '04FF';
        const max_fwTempRaw = 100;
        expect(() => scaleMaxFwTemp(max_fwTempPrefix, max_fwTempRaw)).toThrow('Unknown max fw temp prefix: ' + max_fwTempPrefix);
    });
});


describe("Test Max Rt Scaling",()=>{
    test("Max Rt Temp Scaling for 125C prefix", ()=>{
        const max_RtTempPrefix = '125C';
        const max_RtTempRaw = 100;
        expect(scaleMaxRtTemp(max_RtTempPrefix, max_RtTempRaw)).toBe(0.1);
    });
    test("Max Rt Temp Scaling for 125D prefix", ()=>{
        const max_RtTempPrefix = '125D';
        const max_RtTempRaw = 100;
        expect(scaleMaxRtTemp(max_RtTempPrefix, max_RtTempRaw)).toBe(1);
    });
    test("Max Rt Temp Scaling for 125E prefix", ()=>{
        const max_RtTempPrefix = '125E';
        const max_RtTempRaw = 100;
        expect(scaleMaxRtTemp(max_RtTempPrefix, max_RtTempRaw)).toBe(10);
    });
    test("Max Rt Temp Scaling for 125F prefix", ()=>{
        const max_RtTempPrefix = '125F';
        const max_RtTempRaw = 100;
        expect(scaleMaxRtTemp(max_RtTempPrefix, max_RtTempRaw)).toBe(100);
    });
    test("Max Rt Temp Scaling for unknonw prefix", ()=>{
        const max_RtTempPrefix = '04FF';
        const max_RtTempRaw = 100;
        expect(() => scaleMaxRtTemp(max_RtTempPrefix, max_RtTempRaw)).toThrow('Unknown max rt temp prefix: ' + max_RtTempPrefix);
    });
});


 describe("Test Standard Message Type", () =>{
    test("Standard message", () =>{
        const payload = '050406F82F00000414CD650000022D0900023B1000025A3303025E6C010C781716327104FD1700000000';
        const result = parserForUH30(payload);

        expect (result.payload_style).toBe('Standard');
        expect (result.energy_mwh).toBe(12.28);
        expect (result.volume_m3).toBe(260.61);
        expect (result.power_kw).toBe(0.9);
        expect (result.flow_m3h).toBe(0.016);
        expect (result.fw_temp_c).toBe(81.9);
        expect (result.rt_temp_c).toBe(36.4);
        expect (result.meter_id).toBe('71321617');
        expect (result.errors).toBe('00000000');
    });
    test("Standard message with max values in every field", () =>{
        const payload = '050406FFFFFF7F0414FFFFFF7F022DFF7F023BFF7F025AFF7F025EFF7F0C785716327104FD1700000000';
        const result = parserForUH30(payload);

        expect (result.payload_style).toBe('Standard');
        expect (result.energy_mwh).toBe(2147483.647);
        expect (result.volume_m3).toBe(21474836.47);
        expect (result.power_kw).toBe(3276.7);
        expect (result.flow_m3h).toBe(32.767);
        expect (result.fw_temp_c).toBe(3276.7000000000003);
        expect (result.rt_temp_c).toBe(3276.7000000000003);
        expect (result.meter_id).toBe('71321657');
        expect (result.errors).toBe('00000000');
    });
    test("Standard message with min values in every field", () =>{
        const payload = '05040600000000041400000000022D0000023B0080025A0000025E00000C785716327104FD1700000000';
        const result = parserForUH30(payload);

        expect (result.payload_style).toBe('Standard');
        expect (result.energy_mwh).toBe(0);
        expect (result.volume_m3).toBe(0);
        expect (result.power_kw).toBe(0);
        expect (result.flow_m3h).toBe(-32.768);
        expect (result.fw_temp_c).toBe(0);
        expect (result.rt_temp_c).toBe(0);
        expect (result.meter_id).toBe('71321657');
        expect (result.errors).toBe('00000000');
    });
    test("Standard message with Meter Communication Error",()=>{
        const payload = "053406FFFFFFFF3414FFFFFFFF322DFFFF323B0080325AFFFF325EFFFF3C785716327104FD1700000000";
        expect(()=> parserForUH30(payload)).toThrow('Meter Communication Error');
    });    
    test("Standard message with negative values in every field", () =>{
        const payload = '050406FFFFFFFF0414FFFFFFFF022DFFFF023B0080025AFFFF025EFFFF0C785716327104FD1700000000';
        const result = parserForUH30(payload);

        expect (result.payload_style).toBe('Standard');
        expect (result.energy_mwh).toBe(-0.001);
        expect (result.volume_m3).toBe(-0.01);
        expect (result.power_kw).toBe(-0.1);
        expect (result.flow_m3h).toBe(-32.768);
        expect (result.fw_temp_c).toBe(-0.1);
        expect (result.rt_temp_c).toBe(-0.1);
        expect (result.meter_id).toBe('71321657');
        expect (result.errors).toBe('00000000');
    });
    test("Standard message, actual appearing payload example with negative flow", () =>{
        const payload = '0504066D1700000414BB2E0000022D0000023BFFFF025A6902025E3C010C785716327104FD1700000000';
        const result = parserForUH30(payload);

        expect (result.payload_style).toBe('Standard');
        expect (result.energy_mwh).toBe(5.997);
        expect (result.volume_m3).toBe(119.63);
        expect (result.power_kw).toBe(0.0);
        expect (result.flow_m3h).toBe(-0.001);
        expect (result.fw_temp_c).toBe(61.7);
        expect (result.rt_temp_c).toBe(31.6);
        expect (result.meter_id).toBe('71321657');
        expect (result.errors).toBe('00000000');
    });
}); 
