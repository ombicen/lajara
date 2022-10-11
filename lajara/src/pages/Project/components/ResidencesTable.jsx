import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Slider } from 'src/elements/Slider/Slider'

const SortIcon = ({className, ...rest}) => {
    return (
        <div className={`sort ${className}`} {...rest}><div /><div /><div /></div>
    )
}

const FilterSlider = ({ label, dataKey, filter, setFilter, residences }) => {


    const getFilterValue = (key, val = 'min', onlyDefault = false) => {
        if (!onlyDefault && filter[key]) return filter[key][val == 'min' ? 0 : 1];
        return Math[val](...residences.map(res => Number(res[key])))
    }

    return <div className="slider-wrapper">
        <p className="lead">{label}</p>
        <Slider options={{
            value: [
                getFilterValue(dataKey, 'min', true),
                getFilterValue(dataKey, 'max', true),
            ],
            min: getFilterValue(dataKey, 'min', true),
            max: getFilterValue(dataKey, 'max', true),
            onInput: (v) => setFilter(f => ({...f, [dataKey]: v}))
        }}/>
        <p className="small">{getFilterValue(dataKey, 'min')} - {getFilterValue(dataKey, 'max')}</p>
    </div>
}

const ResidencesTable = ({ residences }) => {


    const [sorting, setSorting] = useState({ key: 'apartment_number', order: 'asc' })

    const columns = [
        {
            key: 'apartment_number',
            label: 'LGH NR'
        },
        {
            key: 'floor',
            label: 'Våning'
        },
        {
            key: 'rooms_and_kitchen',
            label: 'ROK'
        },
        {
            key: 'size',
            label: 'Storlek'
        },
        {
            key: 'status',
            label: 'Status'
        },
    ]

    function changeSorting(column) {
        if (sorting.key != column.key) {
            setSorting({ key: column.key, order: 'asc' })
            return;
        }
        
        if (sorting.order == 'asc') {
            setSorting({ key: column.key, order: 'desc' })
        } else {
            setSorting({ key: column.key, order: 'asc' })
        }
    }

    function sort(a, b) {
        if (sorting.key == undefined) return;

        if (typeof a[sorting.key] === 'string') {
            if (sorting.order == 'asc') return a[sorting.key].localeCompare(b[sorting.key])
            if (sorting.order == 'desc') return b[sorting.key].localeCompare(a[sorting.key])
        } else {
            if (sorting.order == 'asc') return a[sorting.key] - b[sorting.key]
            if (sorting.order == 'desc') return b[sorting.key] - a[sorting.key]
        }
    }




    const [filter, setFilter] = useState({})


    const filterFunction = (residence) => {

        let filters = Object.entries(filter);

        for (let [k, v] of filters) {
            if (!(residence[k] >= v[0] && residence[k] <= v[1])) return false;
        }

        return true;
    }

    const filteredRecidences = residences.filter(filterFunction)

    return (
        <Style id="bostader">

            <div className="spacer xl"></div>

            <div className="contained">

                <div className="sliders">


                    <FilterSlider 
                        label={'RUM'}
                        dataKey={'rooms_and_kitchen'}
                        filter={filter}
                        setFilter={setFilter}
                        residences={residences}
                    />

                    <FilterSlider 
                        label={'STORLEK'}
                        dataKey={'size'}
                        filter={filter}
                        setFilter={setFilter}
                        residences={residences}
                    />

                    <FilterSlider 
                        label={'VÅNING'}
                        dataKey={'floor'}
                        filter={filter}
                        setFilter={setFilter}
                        residences={residences}
                    />


                </div>

                <div className="spacer m"></div>

                <table cellSpacing={0}>

                    <thead>
                        <tr>
                            {columns.map(col => (
                                <td key={col.key} onClick={() => changeSorting(col)}>{col.label} <SortIcon 
                                    className={`${sorting.key == col.key ? (sorting.order) : ''}`}
                                /></td>
                            ))}
                            <td>Planritning</td>
                            <td>Övrigt</td>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredRecidences.sort(sort).map(residence => (
                            <tr key={JSON.stringify(residence)}>
                                <td>{residence.apartment_number}</td>
                                <td>{residence.floor}</td>
                                <td>{residence.rooms_and_kitchen}</td>
                                <td>{residence.size}</td>
                                <td><div className={`status ${residence.status}`}>{{
                                    'on_sale': 'Till salu',
                                    'booked': 'Bokad',
                                    'sold': 'Såld',
                                }[residence.status]}</div></td>
                                <td><a href={residence.planritning?.url} rel="noreferrer" target="_blank">Ladda ner pdf</a></td>
                                <td><button onClick={() => alert('Not implemented yet')}>Anmäl intresse</button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>

                {filteredRecidences.length == 0 && <>
                    
                    <div className="no-results">
                        <h2>Inga bostäder matchar dina filter</h2>
                    </div>

                </>}
            </div>

            <div className="spacer xl"></div>
        </Style>
    )
}

const Style = styled.section`

    .sliders {
        display: flex;
        gap: 5rem;

        .slider-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;

            .lead {
                margin-bottom: 1rem;
            }

            .small {
                margin-top: 1rem;
            }
        }
    }

    table {
        width: 100%;

        thead {
            tr {
                td {
                    color: white;
                    background-color: black;
                    padding: 0.5rem;

                    .sort {
                        vertical-align: middle;
                        margin-left: 0.5rem;
                        margin-bottom: 0.2rem;
                        font-size: 1.2rem;
                        width: 1em;
                        height: 1em;
                        position: relative;
                        cursor: pointer;

                        display: inline-flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: space-evenly;


                        div {
                            position: absolute;
                            top: 50%;
                            background-color: white;
                            width: 100%;
                            height: 1px;
                        }
                        
                        

                        &.asc, &.desc {
                            div {
                                position: relative;
                                top: 0%;

                                &:nth-child(1) {
                                    width: 50%;
                                }

                                &:nth-child(2) {
                                    width: 75%;
                                }
                            }

                            &.desc {
                                div {
                                    &:nth-child(1) {
                                        width: 100%;
                                    }

                                    &:nth-child(3) {
                                        width: 50%;
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

        tbody {
            tr {
                td {
                    padding: 0.5rem;

                    border-bottom: solid 1px #DCDFE3;

                    a {
                        color: var(--color-primary);
                        text-decoration: none;
                    }

                    .status {
                        font-size: 12px;
                        background-color: #F39200;
                        color: white;
                        display: inline-flex;
                        padding: 0.25em 1.5em;
                        border-radius: 10em;

                        &.on_sale {
                            background-color: #2E8F3D;
                        }

                        &.sold {
                            background-color: #FF6767;
                        }
                    }

                    button, .button {
                        font-size: 11px;
                    }
                }
            }
        }
    }

    .no-results {
        margin-top: 2rem;
        margin-bottom: 2rem;
        text-align: center;
    }


    .mobile & {
        .sliders {
            flex-direction: column;
            gap: 2rem;
            border: solid 1px #e3e3e3;
            padding: 1rem;
            border-radius: 1rem;
        }

        table {
            display: block;
            overflow-x: auto;
            white-space: nowrap;

            thead {
                td {
                    padding-right: 2rem;
                }
            }
        }
    }
`

ResidencesTable.propTypes = {

}

export { ResidencesTable }