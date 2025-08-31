import { Eye, Settings } from 'lucide-react'
import React from 'react'

const AccountsTable:React.FC = () => {
  return (
    <div className="space-y-4">
        <div className="relative">
            <search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted h-4 w-4'/>
            <input type="text" className="input_style" placeholder='Search customer , account numbers , types, or currency'/>
        </div>
        {/* table */}
        <div className="rounded-md border border-border">
            <div className="container_table">
                <table className="table">
                    <thead className='tableHeader'>
                        <th className='tableHead'>Customer & Account</th>
                        <th className='tableHead'>Type</th>
                        <th className='tableHead'>Account Number</th>
                        <th className='tableHead'>Balance</th>
                        <th className='tableHead'>Change</th>
                        <th className='tableHead'>Interest Rate</th>
                        <th className='tableHead text-right'>Actions</th>
                    </thead>
                    <tbody className="tableBody">
                        <tr className="tableRow">
                            
                            <td className="tableCall">
                                <div>
                                    <p className="font-interBold rtl:font-danaBold">John Smith - Checking</p>
                                    <p className="text-muted">USD Account</p>
                                </div>
                            </td>
                            <td className="tableCall">
                                <div>
                                 <div className="badge badge_default">Checking</div>
                                </div>
                            </td>
                            <td className="tableCall">
                                   **** **** **** 4212 
                            </td>
                            <td className="tableCall">
                                <div className='font-interBold rtl:font-danaBold'>
                                    $25,420.5
                                    <br />
                                    USD
                                </div>
                            </td>
                            <td className="tableCall">
                                {/* ? : */}
                                <div className={`flex items-center gap-1 `}>
                                    +$1,240.3(+5.2%)
                                </div>
                            </td>
                              <td className="tableCall">
                                <span className="font-interBold rtl:font-danaBold text-success">0.1% APY</span>
                            </td>
                              <td className="tableCall">
                                <div className='flex gap-2 justify-end'>
                                    <button className="btn primary">
                                        <Eye className='h-4 w-4 mr-2'/>
                                        Details
                                    </button>
                                    <button className="btn primary">
                                        <Settings className='h-4 w-4'/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="tableRow">
                            
                            <td className="tableCall">
                                <div>
                                    <p className="font-interBold rtl:font-danaBold">John Smith - Checking</p>
                                    <p className="text-muted">USD Account</p>
                                </div>
                            </td>
                            <td className="tableCall">
                                <div>
                                 <div className="badge badge_default">Checking</div>
                                </div>
                            </td>
                            <td className="tableCall">
                                   **** **** **** 4212 
                            </td>
                            <td className="tableCall">
                                <div className='font-interBold rtl:font-danaBold'>
                                    $25,420.5
                                    <br />
                                    USD
                                </div>
                            </td>
                            <td className="tableCall">
                                {/* ? : */}
                                <div className={`flex items-center gap-1 `}>
                                    +$1,240.3(+5.2%)
                                </div>
                            </td>
                              <td className="tableCall">
                                <span className="font-interBold rtl:font-danaBold text-success">0.1% APY</span>
                            </td>
                              <td className="tableCall">
                                <div className='flex gap-2 justify-end'>
                                    <button className="btn primary">
                                        <Eye className='h-4 w-4 mr-2'/>
                                        Details
                                    </button>
                                    <button className="btn primary">
                                        <Settings className='h-4 w-4'/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="tableRow">
                            
                            <td className="tableCall">
                                <div>
                                    <p className="font-interBold rtl:font-danaBold">John Smith - Checking</p>
                                    <p className="text-muted">USD Account</p>
                                </div>
                            </td>
                            <td className="tableCall">
                                <div>
                                 <div className="badge badge_default">Checking</div>
                                </div>
                            </td>
                            <td className="tableCall">
                                   **** **** **** 4212 
                            </td>
                            <td className="tableCall">
                                <div className='font-interBold rtl:font-danaBold'>
                                    $25,420.5
                                    <br />
                                    USD
                                </div>
                            </td>
                            <td className="tableCall">
                                {/* ? : */}
                                <div className={`flex items-center gap-1 `}>
                                    +$1,240.3(+5.2%)
                                </div>
                            </td>
                              <td className="tableCall">
                                <span className="font-interBold rtl:font-danaBold text-success">0.1% APY</span>
                            </td>
                              <td className="tableCall">
                                <div className='flex gap-2 justify-end'>
                                    <button className="btn primary">
                                        <Eye className='h-4 w-4 mr-2'/>
                                        Details
                                    </button>
                                    <button className="btn primary">
                                        <Settings className='h-4 w-4'/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="tableRow">
                            
                            <td className="tableCall">
                                <div>
                                    <p className="font-interBold rtl:font-danaBold">John Smith - Checking</p>
                                    <p className="text-muted">USD Account</p>
                                </div>
                            </td>
                            <td className="tableCall">
                                <div>
                                 <div className="badge badge_default">Checking</div>
                                </div>
                            </td>
                            <td className="tableCall">
                                   **** **** **** 4212 
                            </td>
                            <td className="tableCall">
                                <div className='font-interBold rtl:font-danaBold'>
                                    $25,420.5
                                    <br />
                                    USD
                                </div>
                            </td>
                            <td className="tableCall">
                                {/* ? : */}
                                <div className={`flex items-center gap-1 `}>
                                    +$1,240.3(+5.2%)
                                </div>
                            </td>
                              <td className="tableCall">
                                <span className="font-interBold rtl:font-danaBold text-success">0.1% APY</span>
                            </td>
                              <td className="tableCall">
                                <div className='flex gap-2 justify-end'>
                                    <button className="btn primary">
                                        <Eye className='h-4 w-4 mr-2'/>
                                        Details
                                    </button>
                                    <button className="btn primary">
                                        <Settings className='h-4 w-4'/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AccountsTable